import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const ImageGallery = ({ imageUrls }) => {


    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            {isOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 flex justify-center items-center">
                    <button
                        className="absolute top-5 right-5 m-4 text-white text-2xl"
                        onClick={closeModal}
                    >
                        <IoMdClose className='text-xl sm:text-2xl md:text-3xl' />
                    </button>
                    <div className="relative">
                        <img
                            src={`${import.meta.env.VITE_URL_IMG}${imageUrls[currentIndex]?.image}`}
                            alt={`Imagen ${currentIndex + 1}`}
                            className="w-full h-auto max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
                        />

                        <button
                            className="absolute top-1/2 transform left-4 md:-left-24 text-white text-2xl"
                            onClick={goToPrevious}
                        >
                            <GrPrevious className='text-2xl' />
                        </button>
                        <button
                            className="absolute top-1/2 transform right-4 md:-right-24 text-white text-2xl"
                            onClick={goToNext}
                        >
                            <GrNext className='text-2xl' />
                        </button>
                    </div>
                </div>
            )}

            <div className=" gap-4">
                <div>
                    <section className="bg-white w-full">
                        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 font-futura ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                                    <div onClick={() => openModal(0)} className="group relative flex flex-col overflow-hidden  px-4 pb-4 pt-40 flex-grow rounded-xl">
                                        <img alt="" src={'/img/logoVertical.png'} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-lg" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        {/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">foto1</h3> */}
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                                    <div onClick={() => openModal(1)} className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 mb-4 rounded-xl">
                                        <img alt="" src={'/img/wallperRadio.jpg'} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        {/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">foto2</h3> */}
                                    </div>
                                    <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                        <div onClick={() => openModal(2)} className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 rounded-xl">
                                            <img src={`${import.meta.env.VITE_URL_IMG}${imageUrls?.[2]?.image}`} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            {/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Foto3</h3> */}
                                        </div>
                                        <div onClick={() => openModal(3)} className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 rounded-xl">
                                            <img src={`${import.meta.env.VITE_URL_IMG}${imageUrls?.[3]?.image}`} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                            {/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">foto 4</h3> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col rounded-xl">
                                    <button type='button' onClick={() => openModal(4)} className="group relative flex flex-col overflow-hidden px-4 pb-4 pt-40 flex-grow rounded-xl">
                                        <img src={'/public/img/logoVertical.png'} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                                        {/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">foto6</h3> */}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default ImageGallery;
