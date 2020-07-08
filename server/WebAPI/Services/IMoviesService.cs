﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.DTO;

namespace WebAPI.Services
{
    public interface IMoviesService
    {
        IEnumerable<MovieDTO> GetAllMovies();
        MovieDTO GetMovieByUserId(int Id);
        MovieDTO GetMovieById(int id);
    }
}
