import React from 'react'

const Members = () => {
    const members = [
        {
            id: 1,
            image: "/m1.jpg",
            title: "Sherbano",
        },
        {
            id: 2,
            image: "/m2.jpg",
            title: "Amanat",
        },
        {
            id: 3,
            image: "/m3.jpg",
            title: "Zily",
        },
        {
            id: 4,
            image: "/m4.jpg",
            title: "Bilal",
        },
        {
            id: 5,
            image: "/m5.jpg",
            title: "Neha",
        },
        {
            id: 6,
            image: "/m6.jpg",
            title: "Ahmer",
        },
        {
            id: 7,
            image: "/m7.jpg",
            title: "Shujaat",
        }
    ]
    return (
        <>
            <section className='members'>
                <div className="container">
                    <div className="heading_section">
                        <h2 className='heading'>MEMBERS</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi illum velit harum tempora eius cumque magni dolore molestiae doloremque ratione!</p>
                    </div>
                    <div className="members_container">
                        {
                            members.map(element => (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Members
