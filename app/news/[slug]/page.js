export const metadate = {
    title: 'Тест'
}
  
export default async function Page({params}) {
    return (
        <section className="news-slug">
            <div className="container">
                <h1>{params.slug}</h1>    
            </div>
        </section>
    )
}