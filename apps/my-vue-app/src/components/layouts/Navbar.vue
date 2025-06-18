<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">WorkoutBuilder</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/routines">Routines</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/schedule">Schedule</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/progress">Progress</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
