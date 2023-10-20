import { useEffect, useState } from 'react';
import axios from 'axios';

const Api = () => {
    const[post, setPost] = useState();

    useEffect(() => {
        const getData = async() => {
            try  {
                const result = await axios.get('http://localhost:3000/posts');
                setPost(result.data)
            }
            catch (error) {
                console.log(error);
            }
        };

        getData();
    }, [])

  return (
    <div>
      <div>this is post: </div>
      {post?.map((p) => {
        return (
            <div key={p.id}>{p?.title}</div>
        )
      })}
    </div>
  )
}

export default Api
