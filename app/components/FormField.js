"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { uploadImage } from '@/lib/actions'
import ClipLoader from "react-spinners/ClipLoader";
import axios from 'axios';


const FormField = () => {

    const [loading, setLoading] = useState(false);

    const [post, setPost] = useState({
        image: "",
        caption: ""
    })
    

    const handleChange = (fiedName, value) => {
        setPost((prev) => ({...prev, [fiedName]: value}))
    }

  

    // const handleChangeImage = async (e) => {
    //     e.preventDefault();
    //     const imageFile = e.target.files?.[0];
    //     if (!imageFile) return ;
    //     if (!imageFile.type.includes("image")){
    //         alert("upload an image");
    //         return
    //     }
    //     // 
    //     const formData = new FormData();
    //      formData.append("file", imageFile);
    //     //  
    //     // const reader = new FileReader();
    //     // reader.readAsDataURL(imageFile);
    //     setLoading(prev => !prev)



    //     // reader.onload = async () => {
    //     //     const result = reader.result
    //     //     // console.log(`result is ${result}`)
    //     //     const res = await uploadImage(result)
    //     //     setLoading(prev => !prev)
    //     //     handleChange("image", res.url)

    //     //     console.log(`image url is ${res.url}`)
    //     // };

    //     try {
           
    //         const response = await uploadImage(formData)
    //         setLoading(prev => !prev)
           
    //         // Assuming the server responds with the uploaded image URL
    //         const imageUrl = response.data.url;
    //         handleChange("image", imageUrl)
        
    //         // Now you can handle the uploaded image URL as needed
    //         console.log(`Image URL is ${imageUrl}`);
    //         // Update state, display the image, or perform other actions
    //       } catch (error) {
    //         console.error("Error uploading image:", error);
    //         // Handle the error appropriately
    //       }
    // };

    // const hide = post.image ? "hidden" : ""

    const handleChangeImage = async (e) => {
        e.preventDefault();
        const imageFile = e.target.files?.[0];
      
        if (!imageFile) return;
        if (!imageFile.type.includes("image")) {
          alert("Upload an image");
          return;
        }
      
        const formData = new FormData();
        formData.append("file", imageFile);
      
        try {
          const response = await axios.post('https://rest-ecommerce-next.onrender.com/uploads', formData);
      
          // Assuming the server responds with the uploaded image URL
          const imageUrl = response.data.url;
      
          // Now you can handle the uploaded image URL as needed
          console.log(`Image URL is ${imageUrl}`);
          // Update state, display the image, or perform other actions
        } catch (error) {
          console.error("Error uploading image:", error);
          // Handle the error appropriately
        }
      };
      
    

  return (
    <div>
        <h2 className='text-center capitalize text-3xl font-bold mb-5'>post form</h2>
    
        <form>
            <div className=''>
                <label className=''>
                    {!post.image && <span className='py-2 px-2'>choose an image</span>}
                </label>
                <input
                    id='image'
                    type='file'
                    accept='image/*'
                    required
                    onChange={(e) => handleChangeImage(e)}
                />

                {loading && <div className='border-dashed border-white border-2 m-3 w-56 flex justify-center'>
            
                    <ClipLoader color="#36d7b7" loading={loading} />
                </div>}

                {post.image && (
                    <div className='border-dashed border-white border-2 m-3 w-56 flex justify-center'>
                        
                        <Image
                            src={post.image}
                            className="p-5"
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