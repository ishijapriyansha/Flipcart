import React from 'react'

export default function ProductCard(props) {
  return (
  
<div className="bg-neutral-primary-soft max-w-sm px-6 pt-6 pb-0 border border-default rounded-sm shadow-xs">
    <a href="#">
        <img className="h-2/5 w-full" src={props.img} alt="" />
    </a>
    <a href="#">
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">{props.title}</h5>
    </a>
    <p className="mb-6 text-body">{props.description}</p>
    <div className='font-bold text-xl flex items-center justify-between'>{props.price}
    <button className="inline-flex items-center text-body bg-blue-500 box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-1 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
        Add to Cart
        <svg className="w-4 h-2 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
    </button>
    </div>
</div>
)

}


