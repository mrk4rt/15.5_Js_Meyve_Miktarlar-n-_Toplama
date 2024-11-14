# Meyve Miktarlarını Toplama

## Proje Amacı
Bu proje, bir markette satılan meyvelerin miktarlarını içeren bir nesneyi `for...in` döngüsü ile dolaşarak toplam meyve miktarını hesaplamayı amaçlamaktadır. Bu örnek, JavaScript’te nesneler üzerinde nasıl döngü yapılabileceğini anlamak için iyi bir alıştırmadır.

## Anahtar Kelimeler ve Kullanılacak Değişkenler
- **let**: Değişken tanımlamak için kullanılır.
- **for...in döngüsü**: Nesnenin tüm özellikleri üzerinde dolaşmak için kullanılır.
- **toplam**: Tüm meyvelerin miktarlarının toplandığı değişken.
- **meyveler**: Meyve adlarını ve miktarlarını içeren nesne.

## İzlenecek Adımlar

### 1. Meyve Nesnesi Oluşturma:
- Satışta olan her bir meyvenin adı ve miktarı olacak şekilde bir nesne oluştur.
- Örneğin: `{elma: 10, armut: 5, muz: 8}` şeklinde anahtar-değer çiftleri kullan.

### 2. Toplam Miktar İçin Değişken Tanımlama:
- Meyvelerin toplam miktarını tutacak bir **toplam** değişkeni tanımla ve başlangıç değeri olarak `0` ver.

### 3. for...in Döngüsü ile Nesneyi Dolaşma:
- `for...in` döngüsü ile **meyveler** nesnesindeki her bir anahtar üzerinde dolaş.
- Döngüdeki her adımda, mevcut meyve miktarını **toplam** değişkenine ekle.

### 4. Toplamı Yazdırma:
- Döngü tamamlandığında, **toplam** değişkenini kullanarak tüm meyvelerin toplam miktarını ekrana yazdır.

## Meyve Nesnesi

```javascript
const meyveler = {
  elma: 10,
  armut: 5,
  muz: 8,
  portakal: 12,
  çilek: 6
};
