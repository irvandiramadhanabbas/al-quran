import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TafsirSurat = () => {
  const { id } = useParams();
  const [tafsir, setTafsir] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTafsirSurat = async (idSurat) => {
    try {
      const response = await fetch(`https://equran.id/api/v2/tafsir/${idSurat}`);
      const data = await response.json();
      setTafsir(data.data);
    } catch (error) {
      console.error("Gagal mengambil data tafsir:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTafsirSurat(id);
  }, [id]);

  if (loading)
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2">Memuat tafsir surat...</p>
      </div>
    );

  if (!tafsir)
    return <p className="text-danger">Tafsir tidak ditemukan atau terjadi kesalahan.</p>;

  return (
    <div className="container my-4">
      <h2 className="mb-2">Tafsir Surat {tafsir.namaLatin}</h2>
      <p className="mb-1">
        <strong>Nama Arab:</strong> {tafsir.nama}
      </p>
      <p className="mb-1">
        <strong>Arti:</strong> {tafsir.arti}
      </p>
      <p className="mb-3">
        <strong>Jumlah Ayat:</strong> {tafsir.jumlahAyat}
      </p>

      <hr />

      {tafsir.tafsir.length > 0 ? (
        <ul className="list-group">
          {tafsir.tafsir.map((item) => (
            <li key={item.ayat} className="list-group-item mb-2">
              <strong>Ayat {item.ayat}:</strong>
              <p className="mb-0 text-muted">{item.teks}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-warning">Belum ada tafsir tersedia untuk surat ini.</p>
      )}
    </div>
  );
};

export default TafsirSurat;
