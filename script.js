document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const loader = document.getElementById('loader');
    const images = [
        { src: './images/2025-03-03.jpg', thumb: './images/2025-03-03_thumb.jpg', name: '南黄弯嘴犀鸟，克鲁格国家公园 ，南非 (© Richard Du Toit/Minden Pictures)' },
        { src: './images/2025-03-02.jpg', thumb: './images/2025-03-02_thumb.jpg', name: '桉树，梅加龙谷，蓝山山脉国家公园，新南威尔士州，澳大利亚 (© Andrew Peacock/TANDEM Stills + Motion)' },
        { src: './images/2025-03-01.jpg', thumb: './images/2025-03-01_thumb.jpg', name: '玛琳湖精灵岛上空的北极光，贾斯珀国家公园，加拿大 (© Mumemories/Getty Images)' },
        { src: './images/2025-02-28.jpg', thumb: './images/2025-02-28_thumb.jpg', name: '虎穴寺，不丹 (© Baron Reznik/Getty Images)' },
        { src: './images/2025-02-27.jpg', thumb: './images/2025-02-27_thumb.jpg', name: '北极熊幼崽，丘吉尔，马尼托巴省，加拿大 (© Eric Baccega/NPL/Minden Pictures)' },
        { src: './images/2025-02-26.jpg', thumb: './images/2025-02-26_thumb.jpg', name: '莱奇湖上的斯托克尔城堡，阿盖尔郡，苏格兰 (© WLDavies/Getty Images)' },
        { src: './images/2025-02-25.jpg', thumb: './images/2025-02-25_thumb.jpg', name: '砂岩石柱，布莱斯峡谷国家公园，犹他州，美国 (© Stephen Matera/TANDEM Stills + Motion)' },
        { src: './images/2025-02-24.jpg', thumb: './images/2025-02-24_thumb.jpg', name: '斯潘塞湾的一群伞膜乌贼, 怀阿拉,南澳大利亚 (© Gary Bell/Minden Pictures)' },
        { src: './images/2025-02-23.jpg', thumb: './images/2025-02-23_thumb.jpg', name: '日出时分的富士山, 河口湖, 日本 (© Twenty47studio/Getty Images)' },
        { src: './images/2025-02-22.jpg', thumb: './images/2025-02-22_thumb.jpg', name: '圣路易斯拱门, 密苏里州, 美国 (© f11photo/Getty Images)' },
        { src: './images/2025-02-21.jpg', thumb: './images/2025-02-21_thumb.jpg', name: '希莫加附近的 Champaka Sarasi 池塘，卡纳塔克邦，印度 (© Amith Nag Photography/Getty Images)' },
        { src: './images/2025-02-20.jpg', thumb: './images/2025-02-20_thumb.jpg', name: '马鹿，加拿大 (© Delbars/Getty Images)' },
        { src: './images/2025-02-19.jpg', thumb: './images/2025-02-19_thumb.jpg', name: '欧亚水獭，莱利斯塔德，荷兰 (© Ernst Dirksen/Minden Pictures)' },
        { src: './images/2025-02-18.jpg', thumb: './images/2025-02-18_thumb.jpg', name: '大蓝洞，伯利兹 (© JamiesOnAMission/Shutterstock)' },
        { src: './images/2025-02-17.jpg', thumb: './images/2025-02-17_thumb.jpg', name: 'Coll d'Ares，加泰罗尼亚比利牛斯​​山脉 (© CRISTIAN IONUT ZAHARIA/Shutterstock)' },
        { src: './images/2025-02-16.jpg', thumb: './images/2025-02-16_thumb.jpg', name: '座头鲸妈妈和宝宝，汤加 (© Chase Dekker/Minden Pictures)' },
        { src: './images/2025-02-15.jpg', thumb: './images/2025-02-15_thumb.jpg', name: '三十槌冰柱，秩父市，日本 (© watayu0821/shutterstock)' },
        { src: './images/2025-02-14.jpg', thumb: './images/2025-02-14_thumb.jpg', name: '两只麦哲伦企鹅，福克兰群岛 (© Vicki Jauron, Babylon and Beyond Photography/Getty Images)' },
        { src: './images/2025-02-13.jpg', thumb: './images/2025-02-13_thumb.jpg', name: '泰瑞尔湖，维多利亚州，澳大利亚 (© Monica Bertolazzi/Getty Images)' },
        { src: './images/2025-02-12.jpg', thumb: './images/2025-02-12_thumb.jpg', name: '上海豫园的灯会，元宵节，上海市，中国 (© atiger/Shutterstock)' },
        { src: './images/2025-02-11.jpg', thumb: './images/2025-02-11_thumb.jpg', name: '云冈石窟，大同，山西省，中国 (© Eric Yang/Getty Images)' },
        { src: './images/2025-02-10.jpg', thumb: './images/2025-02-10_thumb.jpg', name: '雨伞艺术装置，博罗市场，伦敦，英国 (© Malcolm P Chapman/Getty Images)' },
        { src: './images/2025-02-09.jpg', thumb: './images/2025-02-09_thumb.jpg', name: '阿尔斯特罗姆角，鲍威尔湖，犹他州，美国 (© T.M. Schultze/TANDEM Stills + Motion)' },
        { src: './images/2025-02-08.jpg', thumb: './images/2025-02-08_thumb.jpg', name: '梅斯蒂亚的中世纪塔楼，上斯瓦涅季，格鲁吉亚 (© photoaliona/Getty Images)' },
        { src: './images/2025-02-07.jpg', thumb: './images/2025-02-07_thumb.jpg', name: '特隆赫姆的蓝色时刻，挪威 (© Jeanny Mueller/Getty Images)' },
        { src: './images/2025-02-06.jpg', thumb: './images/2025-02-06_thumb.jpg', name: '拱门群岛，瓦拉里基海滩，南岛，新西兰 (© Francesco Vaninetti/AWL/plainpicture)' },
        { src: './images/2025-02-05.jpg', thumb: './images/2025-02-05_thumb.jpg', name: '拱门群岛，瓦拉里基海滩，南岛，新西兰 (© Francesco Vaninetti/AWL/plainpicture)' },
        { src: './images/2025-02-04.jpg', thumb: './images/2025-02-04_thumb.jpg', name: '金桥，巴拿山，岘港，越南 (© Hien Phung Thu/Shutterstock)' },
        { src: './images/2025-02-03.jpg', thumb: './images/2025-02-03_thumb.jpg', name: '盛开的樱花树上的红头长尾山雀 (© Haitong Yu/Getty Images)' },
        { src: './images/2025-02-02.jpg', thumb: './images/2025-02-02_thumb.jpg', name: '年幼的高山土拨鼠 (© Jonas Fichtner-Pflaum/Getty Images)' },
        { src: './images/2025-02-01.jpg', thumb: './images/2025-02-01_thumb.jpg', name: '国王岩堡垒 , 瑞士撒克逊, 德国 (© Bildagentur-online/Exss/Alamy)' },
        { src: './images/2025-01-31.jpg', thumb: './images/2025-01-31_thumb.jpg', name: '日出时的平原斑马，莫卡拉国家公园，南非 (© EcoPrint/Shutterstock)' },
        { src: './images/2025-01-30.jpg', thumb: './images/2025-01-30_thumb.jpg', name: '罗兰多山口，奥德萨和佩迪多山国家公园，西班牙 (© Inaki Relanzon/Nature Picture Library/Alamy Stock Photo)' },
        { src: './images/2025-01-29.jpg', thumb: './images/2025-01-29_thumb.jpg', name: '南京夫子庙的春节许愿牌，江苏省，中国 (© lazy dragon/Shutterstock)' },
        { src: './images/2025-01-28.jpg', thumb: './images/2025-01-28_thumb.jpg', name: '夜空中的烟花表演，长沙，湖南省，中国 (© Sino Images/Getty Images)' },
        { src: './images/2025-01-27.jpg', thumb: './images/2025-01-27_thumb.jpg', name: '琐罗亚斯德神庙，大峡谷国家公园，亚利桑那州，美国 (© Nick Lake/Tandem Stills + Motion)' },
        { src: './images/2025-01-26.jpg', thumb: './images/2025-01-26_thumb.jpg', name: '比利时的欧洲山毛榉森林 (© Philippe Moes/Minden Pictures)' },
        { src: './images/2025-01-25.jpg', thumb: './images/2025-01-25_thumb.jpg', name: '波尔图，葡萄牙 (© Starcevic/Getty Images)' },
        { src: './images/2025-01-24.jpg', thumb: './images/2025-01-24_thumb.jpg', name: '冰岛的史托克间歇泉 (© John and Tina Reid/Getty Images)' },
        { src: './images/2025-01-23.jpg', thumb: './images/2025-01-23_thumb.jpg', name: '黄昏时的鹿谷，帕克城，犹他州，美国 (© Adventure_Photo/Getty Images)' },
        { src: './images/2025-01-22.jpg', thumb: './images/2025-01-22_thumb.jpg', name: '代尔修道院，佩特拉，约旦 (© Punnawit Suwuttananun/Getty Images)' },
        { src: './images/2025-01-21.jpg', thumb: './images/2025-01-21_thumb.jpg', name: '俯瞰那不勒斯湾和维苏威火山，意大利 (© ezypix/Getty Images)' },
        { src: './images/2025-01-20.jpg', thumb: './images/2025-01-20_thumb.jpg', name: '欧亚红松鼠与毒蘑菇 (© Edwin Giesbers/Minden Pictures)' },
        { src: './images/2025-01-19.jpg', thumb: './images/2025-01-19_thumb.jpg', name: '海王星石窟，撒丁岛， 意大利 (© Carlo Murenu/Getty Images)' },
        { src: './images/2025-01-18.jpg', thumb: './images/2025-01-18_thumb.jpg', name: '白沙国家公园的日落，新墨西哥州，美国 (© Image Professionals GmbH/Alamy Stock Photo)' },
        { src: './images/2025-01-17.jpg', thumb: './images/2025-01-17_thumb.jpg', name: '褐鹈鹕，圣地亚哥，加利福尼亚州，美国 (© Arthur Morris/BIRDS AS ART/Getty Images)' },
        { src: './images/2025-01-16.jpg', thumb: './images/2025-01-16_thumb.jpg', name: '尖峰国家公园的高峰步道，圣贝尼托县，加利福尼亚州，美国 (© yhelfman/Getty Images)' },
        { src: './images/2025-01-15.jpg', thumb: './images/2025-01-15_thumb.jpg', name: 'Pointe du Diable，圣皮埃尔，留尼汪岛 (© MONTICO Lionel/Alamy)' },
        { src: './images/2025-01-14.jpg', thumb: './images/2025-01-14_thumb.jpg', name: 'Village of Zahara de la Sierra, Cádiz province, Spain (© SEN LI/Getty Images)' },
        { src: './images/2025-01-13.jpg', thumb: './images/2025-01-13_thumb.jpg', name: '小屋和特尔莫尔灯塔，兰德温岛，威尔士，英国 (© Westend61 on Offset/Shutterstock)' },
        { src: './images/2025-01-12.jpg', thumb: './images/2025-01-12_thumb.jpg', name: '大堡礁的宝石大眼鲷鱼，澳大利亚 (© Fred Bavendam/Minden Pictures)' },
        { src: './images/2025-01-11.jpg', thumb: './images/2025-01-11_thumb.jpg', name: '梅克内斯的Heri es-Swani，摩洛哥 (© Calin Stan/Shutterstock)' },
        { src: './images/2025-01-10.jpg', thumb: './images/2025-01-10_thumb.jpg', name: '亚伯拉罕湖，阿尔伯塔省，加拿大 (© Basic Elements Photography/Getty Images)' },
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
