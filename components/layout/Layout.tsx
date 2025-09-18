
'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import Footer1 from './footer/Footer1'
import Footer10 from './footer/Footer10'
import Footer11 from './footer/Footer11'
import Footer12 from './footer/Footer12'
import Footer13 from './footer/Footer13'
import Footer14 from './footer/Footer14'
import Footer15 from './footer/Footer15'
import Footer16 from './footer/Footer16'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Footer5 from './footer/Footer5'
import Footer6 from './footer/Footer6'
import Footer7 from './footer/Footer7'
import Footer8 from './footer/Footer8'
import Footer9 from './footer/Footer9'
import Header1 from "./header/Header1"
import Header10 from './header/Header10'
import Header11 from './header/Header11'
import Header12 from './header/Header12'
import Header13 from './header/Header13'
import Header14 from './header/Header14'
import Header15 from './header/Header15'
import Header16 from './header/Header16'
import Header2 from './header/Header2'
import Header3 from './header/Header3'
import Header4 from './header/Header4'
import Header5 from './header/Header5'
import Header6 from './header/Header6'
import Header7 from './header/Header7'
import Header8 from './header/Header8'
import Header9 from './header/Header9'
import Offcanvas from './Offcanvas'
import Search from './Search'

interface LayoutProps {
	headerStyle?: Number
	footerStyle?: Number
	children?: React.ReactNode
	breadcrumbTitle?: string
}


export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
	const [scroll, setScroll] = useState<boolean>(false)
	// Mobile Menu
	const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
	const handleMobileMenu = (): void => setMobileMenu(!isMobileMenu)

	const [isSearch, setSearch] = useState<boolean>(false)
	const handleSearch = (): void => setSearch(!isSearch)

	useEffect(() => {
		const WOW: any = require('wowjs');
		(window as any).wow = new WOW.WOW({
			live: false
		});

		// Initialize WOW.js
		(window as any).wow.init()

		AOS.init()

		const handleScroll = (): void => {
			const scrollCheck: boolean = window.scrollY > 100
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck)
			}
		}

		document.addEventListener("scroll", handleScroll)

		return () => {
			document.removeEventListener("scroll", handleScroll)
		}
	}, [scroll])
	return (
		<>
			<div id="top" />
			{!headerStyle && <Header11 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} />}
			{headerStyle == 11 ? <Header11 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} /> : null}
			<Search isSearch={isSearch} handleSearch={handleSearch} />
			<Offcanvas isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />

			<main>
				{breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

				{children}
			</main>

			{!footerStyle && < Footer1 />}
			{footerStyle == 11 ? < Footer11 /> : null}


			<BackToTop target="#top" />
		</>
	)
}
