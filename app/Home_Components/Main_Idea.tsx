


export default function Main_Idea(){
    return(

        <div className="flex flex-col justify-center items-center "> {/* Container Div to center the content vertically and horizontally */}
        <p className="-translate-y-20 w-1/2 text-center text-2xl text-wrap">
            The Stevens ColorStack Chapter empowers 
            Black and Latino students in tech,     
            <br></br>
            fostering belonging, professional growth, and success together.
        </p>

        <p className="-translate-y-20 w-3/4 text-center text-2xl text-balance">
            <br></br>
            <strong>Everyone is welcome</strong>. You don't have to be Hispanic or Black to support our mission. 
            <br></br>
            We want everyone, regardless of race or gender, to be part of our community.
        </p>


        <div className=" -translate-y-10 w-[92%] max-w-275 mx-auto  mb-[2.5em] flex justify-center items-center flex-wrap">
            <img className="max-w-210 w-full h-125 object-cover rounded-[18px] " src="/images/colorstack-group.jpg" alt="ColorStack Group"/>
        </div>


        </div>

        
    )

}