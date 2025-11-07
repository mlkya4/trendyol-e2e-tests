# Trendyol E2E Test Otomasyon Projesi

Bu proje, Trendyol web sitesinin temel kullanıcı akışlarını (Login, Arama, Sepet) otomatize etmek amacıyla **CodeceptJS** ve **Playwright** kullanılarak oluşturulmuş bir uçtan uca (E2E) test süitidir.

Proje, **Page Object Model (POM)** tasarım deseni kullanılarak yapılandırılmıştır.

## 🚀 Kullanılan Teknolojiler

* **Test Çatısı (Framework):** CodeceptJS
* **Tarayıcı Motoru (Helper):** Playwright
* **Programlama Dili:** JavaScript (ES6+)
* **Tasarım Deseni:** Page Object Model (POM)
* **Sürüm Kontrolü:** Git & GitHub

## 🎯 Otomatize Edilen Senaryolar

Bu projede aşağıdaki temel test senaryoları ele alınmıştır:

1.  **Giriş (Login):**
    * Kullanıcının geçerli bilgilerle sisteme başarıyla giriş yapması.
    * *(İleride eklenecek: Hatalı şifre ile negatif test)*

2.  **Sepet Akışı (Shopping Cart Flow):**
    * **Boş Sepet:** Kullanıcının (giriş yapmadan) sepet sayfasına gittiğinde "Sepetinizde ürün bulunmamaktadır" mesajını görmesi.
    * **Dolu Sepet:** Kullanıcının:
        1.  Sisteme giriş yapması.
        2.  Bir ürün ("Multivitamin") araması.
        3.  Arama sonuçlarından ilk ürüne tıklaması (yeni sekmede).
        4.  Ürün detay sayfasında "Sepete Ekle" butonuna basması.
        5.  Sepet sayfasına giderek eklediği ürünün orada olduğunu ("Sepeti Onayla" butonu ile) doğrulaması.

## 🏃‍♂️ Proje Nasıl Çalıştırılır?

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi klonlayın:**
    ```bash
    git clone [https://github.com/mlkya4/trendyol-e2e-tests.git](https://github.com/mlkya4/trendyol-e2e-tests.git)
    ```

2.  **Proje klasörüne gidin:**
    ```bash
    cd trendyol-e2e-tests
    ```

3.  **Gerekli bağımlılıkları (dependencies) yükleyin:**
    ```bash
    npm install
    ```

4.  **Tüm testleri çalıştırın:**
    ```bash
    npx codeceptjs run
    ```

5.  **Testleri (headless modda) tarayıcı görünmeden çalıştırmak için:**
    ```bash
    npx codeceptjs run --headless
    ```
