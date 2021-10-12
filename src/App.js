import { useState, useEffect } from 'react'

const values = [5, 10, 15, 25, 50]

export default function App() {
	const [bill, setBill] = useState('')
	const [people, setPeople] = useState('')
	const [total, setTotal] = useState('')
	const [tip, setTip] = useState('')
	const [percent, setPercent] = useState('')

	const handleBill = (e) => {
		if (e.target.value <= 0) {
			setBill('')
		} else {
			setBill(e.target.value)
		}
	}

	const handlePeople = (e) => {
		if (e.target.value <= 0) {
			setPeople('')
		} else {
			setPeople(e.target.value)
		}
	}

	const handlePercent = (e) => {
		if (e.target.value <= 0) {
			setPercent('')
		} else {
			setPercent(e.target.value)
		}
	}

	const handleButton = (e) => {
		e.preventDefault()
		setPercent('')
		setPercent(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setBill('')
		setPeople('')
		setPercent('')
		setTip('0.00')
		setTotal('0.00')
	}

	useEffect(() => {
		if (bill > 0 && people > 0 && percent > 0) {
			const totalTip = +bill * (+percent / 100)
			const totalBal = +bill + +totalTip
			setTip((+totalTip / +people).toFixed(2))
			setTotal((+totalBal / +people).toFixed(2))
		} else {
			setTip('0.00')
			setTotal('0.00')
		}
	}, [bill, people, percent])

	return (
		<div className='w-full bg-blue-gray-1 text-blue-gray-3 text-base font-bold h-screen md:p-16 font-space'>
			<div className='block text-center font-lg leading-6 text-teal-new tracking-widest py-8 md:py-0 md:mb-16 '>
				<p>SPLI</p>
				<p>TTER</p>
			</div>

			<form
				onSubmit={handleSubmit}
				className='w-full flex flex-col md:flex-row md:w-10/12 lg:w-3/5 m-0 md:mx-auto md:space-x-7 bg-white  rounded-t-2xl md:rounded-2xl box-border p-6 shadow-lg'
			>
				<div className='w-full md:w-1/2'>
					<p>Bill</p>
					<div className='relative mt-1 mb-7'>
						<input
							type='number'
							step='.01'
							value={bill}
							onChange={handleBill}
							placeholder='0'
							className='w-full h-10 px-4 text-2xl text-right text-teal-new rounded outline-none box-border 
              bg-regal-gray  font-semibold focus:outline-none focus:ring-2 focus:ring-regal-green focus:border-transparent'
						/>
						<img
							className='absolute top-3 left-3'
							src='/images/icon-dollar.svg'
							alt='dollar'
						/>
					</div>

					<p>Select Tip %</p>
					<div className='grid grid-cols-2 md:grid-cols-3 gap-4 text-lg mt-2 mb-6'>
						{values.map((value) => (
							<button
								className='bg-teal-new text-white font-bold rounded py-2 focus:outline-none focus:bg-green-new focus:text-teal-new m-0'
								onClick={handleButton}
								value={value}
							>
								{value}%
							</button>
						))}
						<input
							className='bg-regal-gray text-right font-semibold text-teal-new rounded placeh px-2 focus:outline-none focus:ring-2 focus:ring-regal-green focus:border-transparent'
							type='number'
							step='1'
							value={percent}
							onChange={handlePercent}
							placeholder='Custom'
						/>
					</div>

					<div className='w-full flex md:flex-row justify-between items-center'>
						<p>Number of People</p>
						{people < 1 && (
							<span className='text-xs text-red-500'>can't be 0</span>
						)}
					</div>

					<div className='relative mt-1'>
						<input
							type='number'
							step='1'
							value={people}
							onChange={handlePeople}
							placeholder='0'
							className={`w-full h-10 px-4 text-2xl text-right text-teal-new rounded outline-none box-border 
              bg-regal-gray  font-semibold focus:outline-none focus:ring-2 focus:ring-regal-green ${
								people < 1 && 'border-2 border-red-500' } focus:border-transparent`}
						/>
						<img
							className='absolute top-3 left-3'
							src='/images/icon-person.svg'
							alt='person'
						/>
					</div>
				</div>

				<div className='w-full mt-7 md:w-1/2 flex flex-col bg-teal-new p-6 rounded-xl box-border text-white'>
					<div className='flex justify-between mb-8 items-center'>
						<div>
							<p className='text-sm lg:text-base'>Tip Amount</p>
							<p className='text-sm text-blue-gray-2'>/ person</p>
						</div>
						<h2 className='text-3xl lg:text-5xl  text-regal-green'>${tip}</h2>
					</div>

					<div className='flex justify-between mb-8 md:mb-0 items-center'>
						<div>
							<p className='text-sm lg:text-base'>Total</p>
							<p className='text-sm text-blue-gray-2'>/ person</p>
						</div>
						<h2 className='text-3xl lg:text-5xl text-regal-green'>${total}</h2>
					</div>

					<button
						type='submit'
						className='w-full py-2 mt-auto rounded bg-green-new focus:outline-none text-teal-new font-semibold text-center'
					>
						RESET
					</button>
				</div>
			</form>
		</div>
	)
}
