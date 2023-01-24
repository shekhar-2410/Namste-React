import React from 'react';

const ContactUs = () => {
	return (
		<div>
			{/* <!-- Container for demo purpose --> */}
			<div className="container my-24 px-6 mx-auto">
				{/* <!-- Section: Design Block --> */}
				<section className="mb-32 text-center text-gray-800">
					<div className="max-w-[700px] mx-auto px-3 lg:px-6">
						<h2 className="text-3xl font-bold mb-12">Contact us</h2>
						<form>
							<div className="form-group mb-6">
								<input
									type="text"
									className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
									id="exampleInput7"
									placeholder="Name"
								/>
							</div>
							<div className="form-group mb-6">
								<input
									type="email"
									className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
									id="exampleInput8"
									placeholder="Email address"
								/>
							</div>
							<div className="form-group mb-6">
								<textarea
									className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none
          "
									id="exampleFormControlTextarea13"
									rows="3"
									placeholder="Message"
								/>
							</div>
							<div className="form-group form-check text-center mb-6">
								<input
									type="checkbox"
									className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
									id="exampleCheck87"
									checked
								/>
								<label className="form-check-label inline-block text-gray-800" for="exampleCheck87">
									Send me a copy of this message
								</label>
							</div>
							<button
								type="submit"
								className="
                                 w-full
                                px-6
                                py-2.5
                                bg-red-600
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-red-700 hover:shadow-lg
                                focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-red-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out"
							>
								Send
							</button>
						</form>
					</div>
				</section>
				{/* <!-- Section: Design Block --> */}
			</div>
			{/* <!-- Container for demo purpose --> */}
		</div>
	);
};

export default ContactUs;
