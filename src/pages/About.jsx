import React from 'react';

const About = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg p-4 border-0" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="text-center mb-4">
          <img
            src="https://ui-avatars.com/api/?name=Irvandi+Ramadhan&background=0D8ABC&color=fff&size=150"
            alt="Profile"
            className="rounded-circle mb-3 shadow"
            width="120"
            height="120"
          />
          <h3 className="fw-bold mb-0">Irvandi Ramadhan Abbas</h3>
          <small className="text-muted">Mahasiswa Teknik Informatika</small>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between">
            <span><i className="bi bi-card-heading me-2"></i> NIM</span>
            <span>12350111756</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span><i className="bi bi-people me-2"></i> Kelas</span>
            <span>4C</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span><i className="bi bi-journal-code me-2"></i> Prodi</span>
            <span>Teknik Informatika</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span><i className="bi bi-building me-2"></i> Universitas</span>
            <span>UIN Suska Riau</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
