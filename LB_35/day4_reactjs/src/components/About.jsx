import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <h1>
                This is about page
            </h1>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et perferendis dolorem  ipsam reprehenderit excepturi. Eaque earum velit, quisquam hic voluptatibus animi non debitis ipsam. Minima pariatur nobis repellat adipisci neque.
                Ut ipsam earum nesciunt dolore sequi? Vel voluptatem at, asperiores numquam reprehenderit fugit pariatur sequi earum quo quidem cumque esse atque illo eaque quas nostrum iste voluptates consequuntur alias perspiciatis.
                Voluptatibus magni enim repudiandae sint at? Officia fugit dolores quo impedit explicabo aspernatur fugiat cum nostrum, suscipit delectus natus commodi non accusantium! Dicta maxime, tempora quam suscipit unde numquam similique?
                Modi nostrum odit adipisci corrupti sint nobis magni hic quisquam fugit, recusandae aut incidunt sit illo ipsam eius voluptatum enim inventore laboriosam dolore esse doloremque quaerat, neque architecto facilis. Harum.
            </p>

            <Link to="/">
                <button style={{ border: "1px solid blue" }}>
                    Return to home
                </button>
            </Link>
        </>
    )
}

export default About