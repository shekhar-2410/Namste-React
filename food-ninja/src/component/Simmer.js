import React from 'react';

const Simmer = () => {
	return (
		<div>
			<div
				className={
					'w-1/4 box-border h-10 my-8 ml-12  py-6 px-2 border-2 md:shadow-md  border-gray-300 rounded-md'
				}
			/>
			<div className="flex flex-wrap justify-center">
				{Array(10).fill('').map((e, index) => {
					return (
						<div
							key={index}
							className="group box-border h-full w-1/4 border-2 md:shadow-xl  m-6 rounded-lg"
						>
							<div className="h-full border-2 border-gray-200 rounded-lg">
								<div className="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center rounded-lg" />
								<div className="p-6">
									<h2 className="bg-gray-400 animate-pulse h-4 w-1/4 mb-2" />
									<h1 className="w-1/2 mb-4 h-6 animate-pulse bg-gray-500" />
									<p className="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400" />
									<div className="flex items-center flex-wrap ">
										<a className="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0" />
										<span className="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1" />
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Simmer;
