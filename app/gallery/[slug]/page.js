export const metadate = {
    title: 'Тест'
}
  
export default async function Page({params}) {
    return (
        <section className="gallery-slug">
            <div className="container">
                <h1>{params.slug}</h1>    
            </div>
        </section>
    )
}