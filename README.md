# Hexanest-Nikahan

Contoh Website Nikah atau Wedding dari Hexanest.ID

## Project Setup

```sh
npm install
```

### Kompilasi dan Hot-Reload untuk Pengembangan

```sh
npm run dev
```

### Pemeriksaan Tipe, Kompilasi dan Minifikasi untuk Produksi

```sh
npm run build
```

### Lint dengan [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Project Setup dengan Docker

### Build Docker Image
```sh
docker build -t hexanest-nikahan .
```

### Menjalankan Docker Container
```sh
docker run -d -p 3000:3000 --name hexanest-app hexanest-nikahan
```

### Menghentikan Docker Container
```sh
docker stop hexanest-app
```

### Menjalankan Kembali Docker Container
```sh
docker start hexanest-app
```




