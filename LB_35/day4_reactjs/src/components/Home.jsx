import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>
                This is a home page
            </h1>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ex impedit est praesentium ipsam repellendus enim neque tenetur. Explicabo debitis vitae error architecto eius repellendus vero aspernatur quidem adipisci sapiente.
                Corrupti culpa odit ipsa fuga illo consequuntur voluptatum! Illum ipsam dicta asperiores delectus quis commodi pariatur, nihil temporibus nulla animi porro iusto laborum! Delectus quo aperiam deserunt exercitationem itaque facilis.
                Quia nihil quae sapiente aspernatur, nam cumque esse praesentium iste odio tempore eum? Ea illum, aspernatur provident eius nobis fugit adipisci id, eum, qui tenetur molestias necessitatibus ut vel deleniti?
                Molestias tempore suscipit laudantium et, dolorum illum incidunt dolores voluptatum accusamus soluta quae aliquam nesciunt odio vitae, quaerat at aspernatur iusto nemo est consectetur itaque libero quam sit iure. Vero.
                Pariatur ratione modi cum repudiandae recusandae voluptates quidem dicta rem accusantium. Aspernatur blanditiis sequi illo nihil modi autem quibusdam doloremque incidunt eum dolorum veniam asperiores inventore cumque, dicta atque dignissimos.
            </p>

            <Link to="/about">
                <button style={{ border: "1px solid blue" }}>
                    About
                </button>
            </Link>
        </>
    )
}

export default Home