const serverUrl = "http://localhost:8080"

export const uploadImage = async (imagePath) => {
    try {
        // const res = await fetch(`${serverUrl}/api/upload`, {
        //     method: "POST",
        //     body: JSON.stringify({
        //         path: imagePath,
        //     }),
        // });
        // 'https://rest-ecommerce-next.onrender.com/uploads'
        const res = await fetch('http://localhost:8080/uploads',  {
            
                method: "POST",
                body: JSON.stringify({
                    path: imagePath,
                } ),
            });
        return res.json()
        
    } catch (err) {
        throw err;
    }
};