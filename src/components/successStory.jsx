export default function successStory(){
	return(
	<>
		<div className="w-full flex justify-center">
			<div className="max-w-[1024px] p-7 flex items-center justify-center flex-col gap-3">
			<div>
			<span className="relative inline-block sm:mb-8">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative text-5xl font-bold text-gray-700">What our alumni say about our courses?</span>
                    </span>
				</div>
			

			<div className="grid  gap-5 sm:p-8">
				
				<div className="max-w-[700px] flex gap-3 flex-col p-7 border-2 border-gray-200 rounded-lg shadow-md">
					<div className="flex sm:items-center justify-between flex-col sm:flex-row gap-3 bg-indigo-600 p-3 rounded-md">
						<div className="flex items-center flex-row gap-3">
							<img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="w-16 h-16 rounded-full object-cover  bg-blue-700"/>
								<div className="flex flex-col">
									<h1 className="text-white font-bold">Neha Duby</h1>
									<p className="text-sm text-gray-200">Software Developer Engineer</p>
								</div>
						</div>
						<div className="flex flex-col gap-3 " ><span className="text-white">Placed at: </span> <span className="font-bold text-lg text-gray-200"><img src="" /> Morgan Stanley</span></div>

					</div>
					<hr/>
					<div>
						<p className="text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					 </div>
				</div>
				<div className="max-w-[700px] flex gap-3 flex-col p-7 border-2 border-gray-200 rounded-lg shadow-md">
					
						<div className="flex flex-col sm:flex-row sm:justify-between gap-3 p-3 rounded-md bg-indigo-600">
							<div className="flex flex-col gap-2" ><span className="text-gray-200">Placed at: </span> <span className="font-bold text-lg text-gray-200"><img src="" /> Morgan Stanley</span></div>
								<div className="flex md:items-center flex-col-reverse sm:flex-row gap-3">
									<div className="flex flex-col">
										<h1 className="text-white font-bold">Neha Duby</h1>
										<p className="text-sm text-gray-200">Software Developer Engineer</p>

									</div>
								<img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" className="w-16 h-16 rounded-full object-cover  bg-blue-700"/>

							</div>

						</div>
					
					<hr/>
					<div>
						<p className="text-sm"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					 </div>
				</div>
				
				
			</div>
		</div>
		</div>
	</>)
}
