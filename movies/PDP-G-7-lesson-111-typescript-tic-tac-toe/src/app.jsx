/*

import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post('https://pdp-movies-78.onrender.com/api/auth', {
				username,
				password
			});
			console.log(response.data);
			const userToken = response.data.data;
			localStorage.setItem('userToken', userToken);

			alert('Akkauntga kirdingiz, Rahmat😉');
			window.location.href = '../index.html';
		} catch (error) {
			console.error(error);
			if (error.response) {
				setError(`Serverda xatolik yuz berdi: ${error.response.data}`);
			} else {
				setError('Malumotlar serverga jonatilmadi!❌');
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Username</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					value={username}
					onChange={handleUsernameChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
			{error && <div className="alert alert-danger mt-3">{error}</div>}
		</form>
	);
};

export default App;*/

/*
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const response = await axios.post('https://pdp-movies-78.onrender.com/api/users', {
				name,
				username,
				password,
			});
			console.log(response.data);
			alert(`Ro'yxatdan o'tdingiz, Rahmat😉`);
			window.location.href = '../index.html';
		} catch (error) {
			console.error(error);
			if (error.response) {
				setError(`Serverda xatolik yuz berdi: ${error.response.data}`);
			} else {
				setError(`Ma'lumotlar serverga jo'natilmadi!❌`);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="exampleInputName">Name</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputName"
					value={name}
					onChange={handleNameChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Username</label>
				<input
					type="text"
					className="form-control"
					id="exampleInputEmail1"
					value={username}
					onChange={handleUsernameChange}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					value={password}
					onChange={handlePasswordChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary" id="RegisterBtn">Submit</button>
			{error && <div className="alert alert-danger mt-3">{error}</div>}
		</form>
	);
};

export default App;*/
/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState('All Genres');
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');

	const moviesPerPage = 4;

	useEffect(() => {
		fetchData();
	}, [selectedGenre, searchQuery, currentPage]);

	const fetchData = async () => {
		try {
			const response = await axios.get('https://pdp-movies-78.onrender.com/api/movies');
			const data = response.data;
			const filteredMovies = `Here's the complete optimized code:`


			import React, { useState, useEffect } from 'react';
			import axios from 'axios';

			const Movies = () => {
				const [movies, setMovies] = useState([]);
				const [selectedGenre, setSelectedGenre] = useState('All Genres');
				const [currentPage, setCurrentPage] = useState(1);
				const [searchQuery, setSearchQuery] = useState('');

				const moviesPerPage = 4;

				useEffect(() => {
					fetchData();
				}, [selectedGenre, searchQuery, currentPage]);

				const fetchData = async () => {
					try {
						const response = await axios.get('https://pdp-movies-78.onrender.com/api/movies');
						const data = response.data;
						const filteredMovies = filterMovies(data);
						setMovies(filteredMovies);
					} catch (error) {
						console.error('Error:', error);
					}
				};

				const filterMovies = (data) => {
					let filteredData = data;

					if (selectedGenre !== 'All Genres') {
						filteredData = filteredData.filter(movie => movie.genre.name === selectedGenre);
					}

					if (searchQuery.trim() !== '') {
						filteredData = filteredData.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
					}

					return filteredData;
				};

				const handleGenreClick = (genre) => {
					setSelectedGenre(genre);
					setCurrentPage(1);
				};

				const handleSearchInput = (event) => {
					setSearchQuery(event.target.value.trim());
					setCurrentPage(1);
				};

				const paginate = (pageNumber) => {
					setCurrentPage(pageNumber);
				};

				const startIndex = (currentPage - 1) * moviesPerPage;
				const endIndex = startIndex + moviesPerPage;
				const moviesToShow = movies.slice(startIndex, endIndex);
			}
			return (
				<div className="film">
					<div className="row">
						<div className="col">
							<table className="table">
								<thead>
									<tr>
										<th className="clickable">Title</th>
										<th className="clickable">Genre</th>
										<th className="clickable">Stock</th>
										<th className="clickable">Rate</th>
									</tr>
								</thead>
								<tbody>
									{moviesToShow.map(movie => (
										<tr key={movie.id}>
											<td>{movie.title}</td>
											<td>{movie.genre.name}</td>
											<td>{movie.numberInStock}</td>
											<td>{movie.dailyRentalRate}</td>
										</tr>
									))}
								</tbody>
							</table>
							<nav>
								<ul className="pagination">
									{Array.from({ length: Math.ceil(movies.length / moviesPerPage) }).map((_, index) => (
										<li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
											<a className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</a>
										</li>
									))}
								</ul>
							</nav>
						</div>
					</div>
				</div>
			);
		};


		export default Movies;*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [selectedGenre, setSelectedGenre] = useState('All Genres');
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');

	const moviesPerPage = 4;

	useEffect(() => {
		fetchData();
	}, [selectedGenre, searchQuery, currentPage]);

	const fetchData = async () => {
		try {
			const response = await axios.get('https://pdp-movies-78.onrender.com/api/movies');
			const data = response.data;
			const filteredMovies = filterMovies(data);
			setMovies(filteredMovies);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	const filterMovies = (data) => {
		let filteredData = data;

		if (selectedGenre !== 'All Genres') {
			filteredData = filteredData.filter(movie => movie.genre.name === selectedGenre);
		}

		if (searchQuery.trim() !== '') {
			filteredData = filteredData.filter(movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
		}

		return filteredData;
	};

	const handleGenreClick = (genre) => {
		setSelectedGenre(genre);
		setCurrentPage(1);
	};

	const handleSearchInput = (event) => {
		setSearchQuery(event.target.value.trim());
		setCurrentPage(1);
	};

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const startIndex = (currentPage - 1) * moviesPerPage;
	const endIndex = startIndex + moviesPerPage;
	const moviesToShow = movies.slice(startIndex, endIndex);

	return (
		<div>
			<header>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">Muhammadrizo</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0 top-menu">
								<li className="nav-item">
									<a className="nav-link" aria-current="page" href="./login/inner.html">
										Login
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="./register/register.html">
										Register
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>

			<div className="container-fluid">
				<div className="bigBox">
					<div className="col-3">
						<ul className="list-group">
							<li className="list-group-item">All Genres</li>
							<li className="list-group-item">Action</li>
							<li className="list-group-item">Comedy</li>
							<li className="list-group-item">Romance</li>
							<li className="list-group-item">Thriller</li>
						</ul>
					</div>

					<div className="search_option box">
						<p>
							Showing <span className="moviNum">0</span> movies in the database.
						</p>
						<input type="text" name="query" className="form-control my-3" placeholder="Search..." value="" />
						{/* <div className="film"> </div> */}
						<div className="film">
							<div className="row">
								<div className="col">
									<table className="table">
										<thead>
											<tr>
												<th className="clickable">Title</th>
												<th className="clickable">Genre</th>
												<th className="clickable">Stock</th>
												<th className="clickable">Rate</th>
											</tr>
										</thead>
										<tbody>
											{moviesToShow.map((movie) => (
												<tr key={movie.id}>
													<td>{movie.title}</td>
													<td>{movie.genre.name}</td>
													<td>{movie.numberInStock}</td>
													<td>{movie.dailyRentalRate}</td>
												</tr>
											))}
										</tbody>
									</table>
									<nav>
										<ul className="pagination">
											{Array.from({ length: Math.ceil(movies.length / moviesPerPage) }).map((_, index) => (
												<li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
													<a className="page-link" onClick={() => paginate(index + 1)}>
														{index + 1}
													</a>
												</li>
											))}
										</ul>
									</nav>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movies;