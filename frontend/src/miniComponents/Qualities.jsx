import React from 'react'

const Qualities = () => {
    const qualities = [
        {
            id: 1,
            image: "/community.jpg",
            title: "COMMUNITY DEVELOPMENT",
            description: "Aoscb slikc skjc sj vclsve clwe cSU cSUDY hsL sd vhsd yvhsldvsldvh sudvjh sudvy hseyd hshd sujdvh sxhd zsxhd czksujdh xsihcdb KUESc ESUYh cskUYdhc nKSJdh ckSJdh ks jdhnvc zkusjhd"
        },
        {
            id: 2,
            image: "/transparency.jpg",
            title: "TRANSPARENCY",
            description: "Aoscb slikc skjc sj vclsve clwe cSU cSUDY hsL sd vhsd yvhsldvsldvh sudvjh sudvy hseyd hshd sujdvh sxhd zsxhd czksujdh xsihcdb KUESc ESUYh cskUYdhc nKSJdh ckSJdh ks jdhnvc zkusjhd"
        },
        {
            id: 3,
            image: "/impact.jpg",
            title: "IMPACT MEASURMENT",
            description: "Aoscb slikc skjc sj vclsve clwe cSU cSUDY hsL sd vhsd yvhsldvsldvh sudvjh sudvy hseyd hshd sujdvh sxhd zsxhd czksujdh xsihcdb KUESc ESUYh cskUYdhc nKSJdh ckSJdh ks jdhnvc zkusjhd"
        }
    ]
    return (
        <>
            <div className="qualities">
                <h2>OUR QUALITIES</h2>
                <div className="container">
                    {
                        qualities.map(element => {
                            return (
                                <div className="card" key={element.id}>
                                    <div className="img-wrapper">
                                        <img src={element.image} alt={element.title} />
                                    </div>
                                    <div className="content">
                                        <p className='title'>{element.title}</p>
                                        <p className='description'>{element.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Qualities
