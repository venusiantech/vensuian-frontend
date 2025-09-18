'use client'
import React, { useEffect, useRef } from 'react'

interface CircleTextProps {
	text: string // Explicitly define the type of the text prop
}

const CircleText: React.FC<CircleTextProps> = ({ text }) => {
	const circleRef = useRef<HTMLHeadingElement | null>(null) // Correctly type the ref

	useEffect(() => {
		if (circleRef.current) {
			// Replace each character with a <span> element
			circleRef.current.innerHTML = circleRef.current.textContent
				?.replace(/\S/g, '<span>$&</span>') || ''

			const elements = circleRef.current.querySelectorAll<HTMLSpanElement>('span')
			elements.forEach((element, i) => {
				element.style.transform = `rotate(${i * 16}deg)`
			})
		}
	}, [text]) // Run effect if the text changes

	return (
		<h6 className="circle-text rotateme" ref={circleRef}>
			{text}
		</h6>
	)
}

export default CircleText
