import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addArticle, removeArticle } from "../store/reducers/article";

const Article = () => {

  const { control, handleSubmit } = useForm({
    defaultValues: {
      articleName: '',
    }
  })

  const articleStore = useSelector(state => state.article);

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addArticle(values))
  }

  const onRemove = (values) => {
    dispatch(removeArticle(values))
  }



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller name="articleName" control={control}
          render={({ field }) => (
            <input {...field} type="text" placeholder="add new article" />
          )}
        />
        <button type="submit">add article</button>
      </form>
      <ul>
        {
          articleStore.articles.map((article, index) => {
            return <li key={index}>{article.articleName} <button onClick={onRemove}>delete</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default Article
