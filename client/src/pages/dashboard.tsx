import React from 'react';


const dashboard: React.FC = () => {

    return ( 
        <>
            <h1 className="dashboard">Dashboard</h1>
            <h2>Welcome to LMS </h2>
            <br />

            <div className="classes">
                <section className="card">
                    <header>JavaScript</header>
                    <img src ="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1512,q_auto" ></img>
                    <p>Description of class</p>
                </section>

                <section className="card">
                    <header>TypeScript</header>
                    <img src ="https://www.orientsoftware.com/Themes/Content/Images/blog/2023-11-13/typescript-introduction.jpg" ></img>
                    <p>Description of class</p>
                </section>   

                <section className="card">
                    <header>Python</header>
                    <img src ="https://beecrowd.com/wp-content/uploads/2024/04/2022-07-19-Melhores-cursos-de-Python.jpg" ></img>
                    <p>Description of class</p>
                </section>
            </div>
        </>
    );
};

export default dashboard;