
const MenuShimmer = () => {

    return (
        <>
            <div className="shimmer-container md:px-[150px] px-2">
                <h3 className="bg-[#f0f0f0] w-[150px] md:w-[300px] mx-auto h-4 rounded-lg mt-10 mb-4 animate-shimmer"></h3>
                <h3 className="bg-[#f0f0f0] w-[200px] md:w-[400px] mx-auto h-4 rounded-lg mt-10 mb-4 animate-shimmer"></h3>
                <div className="shimmer-container md:flex flex-wrap  gap-3 mt-12">

                    <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">
                        {
                            Array.from({ length: 16 }).map((_, i) => (
                                <div key={i} className="flex mb-4">
                                    <div className="w-9/12 mx-2 bg-[#f0f0f0] h-[130px] animate-shimmer">

                                    </div>
                                    <div className="w-3/12 px-2 h-[130px] animate-shimmer">

                                    </div>
                                </div>
                            ))
                        }



                    </div>
                    <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">

                        <div className="flex justify-between mb-4">
                            <div className="w-5/12 mx-2 bg-[#f0f0f0] h-5 animate-shimmer">

                            </div>
                            <div className="w-1/12 px-2 h-5 animate-shimmer">

                            </div>
                        </div>
                    </div>

                    <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">

                        <div className="flex justify-between mb-4">
                            <div className="w-5/12 mx-2 bg-[#f0f0f0] h-5 animate-shimmer">

                            </div>
                            <div className="w-1/12 px-2 h-5 animate-shimmer">

                            </div>
                        </div>
                    </div>

                    <div className="md:w-6/12 md:mx-auto md:my-4 bg-gray-50 shadow-lg p-4">

                        <div className="flex justify-between mb-4">
                            <div className="w-5/12 mx-2 bg-[#f0f0f0] h-5 animate-shimmer">

                            </div>
                            <div className="w-1/12 px-2 h-5 animate-shimmer">

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default MenuShimmer;