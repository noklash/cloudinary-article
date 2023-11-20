"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { uploadImage } from '@/lib/actions'
import ClipLoader from "react-spinners/ClipLoader";


const FormField = () => {

    const [loading, setLoading] = useState(false);

    const [post, setPost] = useState({
        image: "",
        caption: ""
    })
    

    const handleChange = (fiedName, value) => {
        setPost((prev) => ({...prev, [fiedName]: value}))
    }

  

    const handleChangeImage = async (e) => {
        e.preventDefault();
        const imageFile = e.target.files?.[0];
        if (!imageFile) return ;
        if (!imageFile.type.includes("image")){
            alert("upload an image");
            return
        }
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        setLoading(prev => !prev)

        reader.onload = async () => {
            const result = reader.result
            // console.log(`result is ${result}`)
            const res = await uploadImage(result)
            setLoading(prev => !prev)
            handleChange("image", res.url)

            console.log(`image url is ${res.url}`)
        };
    };

    const hide = post.image ? "hidden" : ""
    

  return (
    <div>
        <h2 className='text-center capitalize text-3xl font-bold mb-5'>post form</h2>
    
        <form>
            <div className=''>
                <label className=''>
                    {!post.image && "choose an image"}
                </label>
                <input
                    id='image'
                    type='file'
                    accept='image/*'
                    required
                    // className={`${hide}`}
                    onChange={(e) => handleChangeImage(e)}
                />
            
                <ClipLoader color="#36d7b7" loading={loading} />

                {post.image && (
                    <div className='border-dashed border-white border-2 m-3 w-56'>
                        <Image
                            src={post.image}
                            className="p-5"
                            // w-48 h-32 p-10 object-contain
                            width={200}
                            height={170}
                            alt='image post'
                        />
                    </div>
                )}
            </div>

            <div className='flex flex-col my-6'>
                <label>
                    Caption
                </label>
                    <input
                        id='image'
                        type='text'
                        className='text-black p-2 mt-2'
                        value={post.caption}
                        placeholder='enter a caption'
                        required
                        onChange={(e) => handleChange("caption", e.target.value) }
                    />
            </div>

        </form>
    </div>
  )
}

export default FormField