import { useLocation } from "react-router-dom";

const Shimmer = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            {isHome && <div className="md:h-[45vh] min-h-[200px] w-full flex flex-col justify-center items-center bg-[#171a29] text-white/90 z-[-2] bg-[length:200%_100%]">

                <div className="inner_circle w-[90px] h-[90px] border-4 border-white border-l-transparent rounded-full flex items-center justify-center animate-spin-slow shadow-lg">
                    <i className="fa-solid fa-pizza-slice text-3xl  animate-spin-slow"></i>
                </div>
                <h2 className="mt-4 text-xl md:text-3xl font-bold">Looking for great food near you...</h2>

            </div>}

            <div className="shimmer-container md:px-[150px] px-2">
                <h3 className="bg-[#f0f0f0] w-[200px] md:w-[400px] h-6 rounded-lg mt-10 mb-4 animate-shimmer"></h3>
                <div className="shimmer-container flex flex-wrap justify-center md:justify-between gap-3 mt-12">
                    {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className="shimmer-card h-[260px] w-[250px] mb-8 rounded-lg">
                            <div className="bg-[#f0f0f0] mb-2 h-[160px] rounded-lg animate-shimmer" />
                            <h3 className="bg-[#f0f0f0] my-4 h-4 w-1/2 animate-shimmer rounded-lg"></h3>
                            <h4 className="flex gap-2 items-center bg-[#f0f0f0] mb-2 h-3 w-full rounded-lg animate-shimmer"></h4>
                            <h4 className="bg-[#f0f0f0] mb-2 h-3 w-1/3 animate-shimmer rounded-lg"></h4>

                            <h4 className="w-1/3 truncate bg-[#f0f0f0] mb-2 h-3 animate-shimmer rounded-lg"></h4>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Shimmer;