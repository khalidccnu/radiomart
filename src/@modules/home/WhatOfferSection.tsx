import { cn } from '@lib/utils';
import { ClassValue } from 'clsx';
import React from 'react';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BsHandThumbsUp } from 'react-icons/bs';
import { MdFlashOn, MdStar } from 'react-icons/md';

interface IProps {
  className?: ClassValue;
}

const WhatOfferSection: React.FC<IProps> = ({ className }) => {
  return (
    <section className={cn('what_offer_section', className)}>
      <div className="container">
        <div className="wrapper grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <span className="flex justify-center items-center bg-yellow-500/20 text-yellow-500 text-3xl w-16 h-16 mx-auto rounded">
              <MdFlashOn />
            </span>
            <h3 className="font-bold text-lg text-blue-cetacean mt-5">Quick Delivery</h3>
          </div>
          <div className="text-center">
            <span className="flex justify-center items-center bg-yellow-500/20 text-yellow-500 text-3xl w-16 h-16 mx-auto rounded">
              <AiFillSafetyCertificate />
            </span>
            <h3 className="font-bold text-lg text-blue-cetacean mt-5">Secure Payment</h3>
          </div>
          <div className="text-center">
            <span className="flex justify-center items-center bg-yellow-500/20 text-yellow-500 text-3xl w-16 h-16 mx-auto rounded">
              <BsHandThumbsUp />
            </span>
            <h3 className="font-bold text-lg text-blue-cetacean mt-5">Best Quality</h3>
          </div>
          <div className="text-center">
            <span className="flex justify-center items-center bg-yellow-500/20 text-yellow-500 text-3xl w-16 h-16 mx-auto rounded">
              <MdStar />
            </span>
            <h3 className="font-bold text-lg text-blue-cetacean mt-5">Return Guarantee</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatOfferSection;
