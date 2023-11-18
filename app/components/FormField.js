"use client"
import React, {useState} from 'react'
import Image from 'next/image'


const FormField = () => {
    const [post, setPost] = useState({
        image: "",
        caption: ""
    })
    // console.log(post.caption)

    const handleChange = (fiedName, value) => {
        setPost((prev) => ({...prev, [fiedName]: value}))
    }

    const handleChangeImage = (e) => {
        e.preventDefault();
        const imageFile = e.target.files?.[0];
        if (!imageFile) return ;
        if (!imageFile.type.includes("image")){
            alert("upload an image");
            return
        }
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);

        reader.onload = () => {
            const result = reader.result
            handleChange("image", result)
        };
    };

  return (
    <form>
        <div>
            <label>
                {!post.image && "choose an image"}
            </label>
            <input
                id='image'
                type='file'
                accept='image/*'
                required
                onChange={(e) => handleChangeImage(e)}
            />
        
            {post.image && (
                <Image
                    src={post.image}
                    className="w-48 h-32 p-10 object-contain"
                    fill
                    alt='image post'
                />
            )}
        </div>

        <div>
            <label>
                Caption
            </label>
                <input
                    id='image'
                    type='text'
                    className='text-black p-2'
                    value={post.caption}
                    placeholder='enter a caption'
                    required
                    onChange={(e) => handleChange("caption", e.target.value) }
                />
        </div>

    </form>
  )
}

export default FormField