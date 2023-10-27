addEventListener;

- olaylari dinlemek ve bu olaylarin gerceklestiğinde belirli islevleri calistirmak icin kullanilan bir fonksiyondur. - Bu yontem, belirli bir olayin tetiklenmesi durumunda cağrilacak bir islevi kaydetmenizi sağlar.

ozetle

- Belirli bir HTML oğesi uzerinde bir olay turunu dinler.
- Belirli bir olay turu gerceklestiğinde, tanimlanan islevi cağirir.

JavaScript'de en cok kullanilabilen olay turleri (event types)

1. click: Bir HTML oğesine tiklama olayi.
2. dblclick: Bir HTML oğesine cift tiklama olayi.
3. mouseover: Fare imleci bir HTML oğesinin uzerine geldiğinde gerceklesen olay.
4. mouseout: Fare imleci bir HTML oğesinin uzerinden ayrildiğinda gerceklesen olay.
5. mousedown: Bir HTML oğesine tiklama basladiğinda gerceklesen olay.
6. mouseup: Bir HTML oğesine tiklama sona erdiğinde gerceklesen olay.
7. keydown: Klavyede bir tusa basma olayi.
8. keyup: Klavyede basilan bir tusun serbest birakilma olayi.
9. keypress: Klavyede bir tusa basma ve serbest birakma olayinin bir kombinasyonu.
10. input: Bir input veya textarea oğesine kullanici tarafindan metin girildiğinde gerceklesen olay.
11. submit: Bir HTML formunun gonderilmesi olayi.
12. load: Bir HTML sayfasinin veya bir resmin tamamen yuklendiği olay.
13. unload: Bir HTML sayfasinin bosaltilma veya yeniden yuklenme olayi.
14. resize: Tarayici penceresinin boyutunun değistirildiği olay.
15. scroll: Bir sayfanin veya bir oğenin kaydirilmasi olayi.
16. focus: Bir HTML oğesine odaklandiğinizda gerceklesen olay.
17. blur: Bir HTML oğesinden odak ciktiğinizda gerceklesen olay.
18. change: Bir form oğesi (orneğin, bir secim kutusu) değeri değistirildiğinde gerceklesen olay.
19. contextmenu: Bir HTML oğesine sağ tiklama (sağ fare duğmesi tiklama) olayi.
20. dragstart, dragend: Bir surukle ve birak islemi basladiğinda ve bittiğinde gerceklesen olaylar.
21. touchstart, touchmove, touchend: Dokunmatik cihazlarda dokunma islemleri sirasinda gerceklesen olaylar.
22. error: Bir resim veya kaynak yuklenirken bir hata olustuğunda gerceklesen olay.

kullanim ornegi;

```js
var myButton = document.getElementById("Button");

myButton.addEventListener("click", function () {
  // Düğmeye tıklama olayı gerçekleştiğinde bu işlev çalışır.
  console.log("Düğmeye tıklandı!");
});
```
