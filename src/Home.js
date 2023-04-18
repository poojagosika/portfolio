import './Home.css'

const Home = () => {
    return(
        <div className="profile">
            <div className="profile-details">
                <p className='p1'>Hello 🖖</p>
                <p className='p2'>I'm <span>Pooja Gosika,</span> Frontend Developer</p>
                <p className='p3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias aspernatur incidunt eligendi expedita doloribus maiores distinctio,
                    pariatur dolores deleniti dignissimos, harum autem ratione ad? Reprehenderit,
                    nemo! At possimus error voluptatum?
                </p>
            </div>
            <div className="profile-image">
                <img src="https://cdn.pixabay.com/photo/2020/09/27/22/40/student-5608074_960_720.png" alt="profile-pic" />
            </div>
        </div>
    );
}

export default Home;