document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const loader = document.getElementById('loader');
    const images = [
        { src: './images/2025-01-09.jpg', thumb: './images/2025-01-09_thumb.jpg', name: '苏丝斯黎沙丘，纳米布沙漠，纳米比亚 (© Airpano/Amazing Aerial Agency)' },
        { src: './images/2025-01-08.jpg', thumb: './images/2025-01-08_thumb.jpg', name: '被雪覆盖的长城，中国 (© View Stock/Alamy Stock Photo)' },
        { src: './images/2025-01-08.jpg', name: '被雪覆盖的长城，中国 (© View Stock/Alamy Stock Photo)' }
    ];

    const createImageElement = (image, index) => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');

        const img = document.createElement('img');
        img.alt = image.name;
        img.dataset.src = image.thumb;

        const name = document.createElement('div');
        name.classList.add('image-name');
        name.textContent = image.name;

        item.appendChild(img);
        item.appendChild(name);
        gallery.appendChild(item);

        // 灯箱
        img.addEventListener('click', () => {
            openLightbox(image);
        });
    };

    images.forEach((image, index) => createImageElement(image, index));

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    const downloadLink = document.getElementById('download-link');
    const closeBtn = document.querySelector('.close');

    const openLightbox = (image) => {
        lightbox.style.display = 'block';
        lightboxImg.src = image.src;
        caption.textContent = image.name;
        downloadLink.href = image.src;
        downloadLink.download = image.name;
    };

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // 使用 Canvas API 压缩图片
    const compressImage = (url, width, height) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
                canvas.toBlob((blob) => {
                    resolve(URL.createObjectURL(blob));
                }, 'image/jpeg', 0.7); // 压缩质量设置为 0.7
            };
            img.src = url;
        });
    };

    // 懒加载
    const lazyLoad = () => {
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            if (isInViewport(img) && !img.src) {
                compressImage(img.dataset.src, 300, 200).then(compressedSrc => {
                    img.src = compressedSrc;
                });
            }
        });
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);
    window.addEventListener('orientationchange', lazyLoad);

    // 显示footer和隐藏loader
    window.addEventListener('load', () => {
        document.getElementById('footer').style.display = 'block';
        loader.style.display = 'none';
        lazyLoad(); // 初始加载
    });
});
