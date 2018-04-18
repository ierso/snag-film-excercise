import React from 'react';
import ChevronRight from 'react-icons/lib/io/chevron-right';
import ChevronLeft from 'react-icons/lib/io/chevron-left';

export const NextArrow = props => {
    const { currentSlide, slideCount, ...remainingProps } = props
    return (
        <ChevronRight {...remainingProps}/>
    )
}
export const PrevArrow = props => {
    const { currentSlide, slideCount, ...remainingProps } = props
    return (
        <ChevronLeft {...remainingProps}/>
    )
}