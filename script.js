document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.getElementById('gallery');
    const loader = document.getElementById('loader');
    const images = [
        { src: './images/2025-08-03.jpg', thumb: './images/2025-08-03_thumb.jpg', name: '夏天田野里盛开的向日葵 (© Arsgera/Shutterstock)' },
        { src: './images/2025-08-02.jpg', thumb: './images/2025-08-02_thumb.jpg', name: '圆顶礁国家公园弗鲁塔附近的岩画, 犹他州, 美国 (© Nicolas VINCENT/Adobe Stock)' },
        { src: './images/2025-08-01.jpg', thumb: './images/2025-08-01_thumb.jpg', name: '皇家英里大道, 爱丁堡, 苏格兰 (© MEDITERRANEAN/Getty Images)' },
        { src: './images/2025-07-31.jpg', thumb: './images/2025-07-31_thumb.jpg', name: '纳帕利海岸的卡拉劳海滩, 可爱岛, 夏威夷, 美国 (© Russ Bishop/DanitaDelimont.com)' },
        { src: './images/2025-07-30.jpg', thumb: './images/2025-07-30_thumb.jpg', name: '里瓦德塞利亚，阿斯图里亚斯，西班牙 (© Agnieszka Glowala/Getty Images)' },
        { src: './images/2025-07-29.jpg', thumb: './images/2025-07-29_thumb.jpg', name: '雌性孟加拉虎，坎哈国家公园，印度 (© Axel Gomille/Nature Picture Library)' },
        { src: './images/2025-07-28.jpg', thumb: './images/2025-07-28_thumb.jpg', name: '蒙古草原上的蒙古包 (© Michel Arnault/Shutterstock)' },
        { src: './images/2025-07-27.jpg', thumb: './images/2025-07-27_thumb.jpg', name: '黑鳍梭鱼群，鲨鱼礁，拉斯穆罕默德国家公园，西奈半岛，埃及 (© Alex Mustard/Nature Picture Library)' },
        { src: './images/2025-07-26.jpg', thumb: './images/2025-07-26_thumb.jpg', name: '黄昏时的红树林，瓦拉基里海滩，松巴岛，印度尼西亚 (© Boonchet Ch./Getty Images)' },
        { src: './images/2025-07-25.jpg', thumb: './images/2025-07-25_thumb.jpg', name: '大加那利岛拉斯帕尔马斯色彩缤纷的房屋鸟瞰图，西班牙 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2025-07-24.jpg', thumb: './images/2025-07-24_thumb.jpg', name: '栖息在树枝上的灰燕鵙家族 (© Captain Skyhigh/Getty Images)' },
        { src: './images/2025-07-23.jpg', thumb: './images/2025-07-23_thumb.jpg', name: '梵蒂冈城与圣彼得大教堂，罗马，意大利 (© RudyBalasko/Getty Images)' },
        { src: './images/2025-07-22.jpg', thumb: './images/2025-07-22_thumb.jpg', name: '夏季的赛里木湖，博尔塔拉蒙古自治州博乐县, 中国新疆维吾尔自治区 (© Feng Wei Photography/Getty Images)' },
        { src: './images/2025-07-21.jpg', thumb: './images/2025-07-21_thumb.jpg', name: '浅海中的鹿角珊瑚 (© blue-sea.cz/Shutterstock)' },
        { src: './images/2025-07-20.jpg', thumb: './images/2025-07-20_thumb.jpg', name: '望远镜下的月球表面照片 (© Sergey Kuznetsov/Getty Images)' },
        { src: './images/2025-07-19.jpg', thumb: './images/2025-07-19_thumb.jpg', name: '幽鹤国家公园的伯吉斯山和翡翠湖, 不列颠哥伦比亚省, 加拿大 (© Feng Wei Photography/Getty Images)' },
        { src: './images/2025-07-18.jpg', thumb: './images/2025-07-18_thumb.jpg', name: '塞里雅兰瀑布日落美景，冰岛 (© Tom Mackie/AWL/plainpicture)' },
        { src: './images/2025-07-17.jpg', thumb: './images/2025-07-17_thumb.jpg', name: '瓦朗索勒高原的薰衣草田，法国 (© zpagistock/Getty Images)' },
        { src: './images/2025-07-16.jpg', thumb: './images/2025-07-16_thumb.jpg', name: '菲莱神庙 (aka Temple of Isis), 阿斯旺, 埃及 (© Ratnakorn Piyasirisorost/Getty Images)' },
        { src: './images/2025-07-15.jpg', thumb: './images/2025-07-15_thumb.jpg', name: '英仙座流星雨和一棵古老刺果松，大盆地国家公园，内华达州，美国 (© Wirestock Creators/Shutterstock)' },
        { src: './images/2025-07-14.jpg', thumb: './images/2025-07-14_thumb.jpg', name: '加利西亚海域游弋的幼年大青鲨，西班牙 (© Damocean/Getty Images)' },
        { src: './images/2025-07-13.jpg', thumb: './images/2025-07-13_thumb.jpg', name: '卡尔夫沙马尔斯维克湾玄武岩柱，斯卡吉半岛，冰岛 (© Arterra Picture Library/Alamy Stock Photo)' },
        { src: './images/2025-07-12.jpg', thumb: './images/2025-07-12_thumb.jpg', name: '汤氏瞪羚母亲和小鹿，马赛马拉，肯尼亚 (© Gallo Images/DanitaDelimont.com)' },
        { src: './images/2025-07-11.jpg', thumb: './images/2025-07-11_thumb.jpg', name: '日出时的东京，日本 (© pongnathee kluaythong/Getty Images)' },
        { src: './images/2025-07-10.jpg', thumb: './images/2025-07-10_thumb.jpg', name: '巴哈马的绿松石色水域 (© BlueOrange Studio/Adobe Stock)' },
        { src: './images/2025-07-09.jpg', thumb: './images/2025-07-09_thumb.jpg', name: '宪法火车站，布宜诺斯艾利斯，阿根廷 (© Grafissimo/Getty Images)' },
        { src: './images/2025-07-08.jpg', thumb: './images/2025-07-08_thumb.jpg', name: '塞切达，多洛米蒂山脉的山峰，南蒂罗尔，意大利 (© Kalyakan/Adobe Stock)' },
        { src: './images/2025-07-07.jpg', thumb: './images/2025-07-07_thumb.jpg', name: '潜水捕鱼的北方鲣鸟，设得兰群岛，苏格兰 (© Richard Shucksmith/Minden Pictures)' },
        { src: './images/2025-07-06.jpg', thumb: './images/2025-07-06_thumb.jpg', name: '死亡谷国家公园的梅斯基特平原沙丘，加利福尼亚州，美国 (© Bryan Jolley/TANDEM Stills + Motion)' },
        { src: './images/2025-07-05.jpg', thumb: './images/2025-07-05_thumb.jpg', name: 'Cize-Bolozon viaduct crossing the Ain gorge, France (© Leonid Andronov/Getty Images)' },
        { src: './images/2025-07-04.jpg', thumb: './images/2025-07-04_thumb.jpg', name: '奥罗塞，撒丁岛，意大利 (© EyeEm Mobile GmbH/Getty Images)' },
        { src: './images/2025-07-03.jpg', thumb: './images/2025-07-03_thumb.jpg', name: '彩虹泉州立公园的彩虹河，佛罗里达州，美国 (© Michel Roggo/Minden Pictures)' },
        { src: './images/2025-07-02.jpg', thumb: './images/2025-07-02_thumb.jpg', name: '被泡尖海葵包围的刺颊海葵鱼，米尔恩湾，巴布亚新几内亚 (© Fred Bavendam/Nature Picture Library)' },
        { src: './images/2025-07-01.jpg', thumb: './images/2025-07-01_thumb.jpg', name: 'Tilting渔村, 福戈岛 , 纽芬兰和拉布拉多省, 加拿大 (© FedevPhoto/Getty Images)' },
        { src: './images/2025-06-30.jpg', thumb: './images/2025-06-30_thumb.jpg', name: '沃尔夫溪陨石坑, 澳大利亚 (© Abstract Aerial Art/Getty Images)' },
        { src: './images/2025-06-29.jpg', thumb: './images/2025-06-29_thumb.jpg', name: 'Pulau Ay蓝色泻湖, 班达群岛, 印度尼西亚 (© fabio lamanna/Alamy Stock Photo)' },
        { src: './images/2025-06-28.jpg', thumb: './images/2025-06-28_thumb.jpg', name: '曼海姆水塔, 德国 (© no limit pictures/Getty Images)' },
        { src: './images/2025-06-27.jpg', thumb: './images/2025-06-27_thumb.jpg', name: 'Knuthöjdsmossen自然保护区, 海勒福什市, 瑞典 (© Sven Halling/DEEPOL/plainpicture)' },
        { src: './images/2025-06-26.jpg', thumb: './images/2025-06-26_thumb.jpg', name: '马头岩上空的银河, 新南威尔士州, 澳大利亚 (© Philip Thurston/Getty Images)' },
        { src: './images/2025-06-25.jpg', thumb: './images/2025-06-25_thumb.jpg', name: '格拉斯顿伯里托尔上的圣迈克尔塔, 格拉斯顿伯里, 萨默塞特郡, 英格兰 (© Gavin Hellier/Getty Images)' },
        { src: './images/2025-06-24.jpg', thumb: './images/2025-06-24_thumb.jpg', name: '精致拱门, 拱门国家公园, 犹他州, 美国 (© mmac72/Getty Images)' },
        { src: './images/2025-06-23.jpg', thumb: './images/2025-06-23_thumb.jpg', name: '德累斯顿易北河谷, 德国 (© Sean Pavone/Getty Images)' },
        { src: './images/2025-06-22.jpg', thumb: './images/2025-06-22_thumb.jpg', name: '亚马逊雨林，厄瓜多尔 (© Mark Fox/Getty Images)' },
        { src: './images/2025-06-21.jpg', thumb: './images/2025-06-21_thumb.jpg', name: '雾中莲花，中国佛山 (© huoguangliang/Getty Images)' },
        { src: './images/2025-06-20.jpg', thumb: './images/2025-06-20_thumb.jpg', name: '一只马赛长颈鹿妈妈正在给小长颈鹿梳理毛发, 塞伦盖蒂,坦桑尼亚 (© Alberto Cassani/Getty Images)' },
        { src: './images/2025-06-19.jpg', thumb: './images/2025-06-19_thumb.jpg', name: '圣卡塔琳娜州的海滩, 巴西 (© CaioCarvalhoPhotography/Getty Images)' },
        { src: './images/2025-06-18.jpg', thumb: './images/2025-06-18_thumb.jpg', name: '红花石蒜上的柑橘凤蝶 (© lzh/Getty Images)' },
        { src: './images/2025-06-17.jpg', thumb: './images/2025-06-17_thumb.jpg', name: '坎伯兰岛国家海岸的海滨森林，乔治亚州，美国 (© Chris Moore/TANDEM Stills + Motion)' },
        { src: './images/2025-06-16.jpg', thumb: './images/2025-06-16_thumb.jpg', name: '海龟，费尔南多·迪诺罗尼亚群岛，巴西 (© João Vianna/Getty Images)' },
        { src: './images/2025-06-15.jpg', thumb: './images/2025-06-15_thumb.jpg', name: '雄性小美洲鸵与幼鸟，托雷斯德尔潘恩国家公园，巴塔哥尼亚，智利 (© Ignacio Yufera/Minden Pictures)' },
        { src: './images/2025-06-14.jpg', thumb: './images/2025-06-14_thumb.jpg', name: '五塔峰，多洛米蒂山脉，科尔蒂纳丹佩佐，贝卢诺省，意大利威尼托大区 (© usabin/Getty Images)' },
        { src: './images/2025-06-13.jpg', thumb: './images/2025-06-13_thumb.jpg', name: '维拉弗兰卡岛，圣米格尔岛，亚速尔群岛，葡萄牙 (© ARoxo/Getty Images)' },
        { src: './images/2025-06-12.jpg', thumb: './images/2025-06-12_thumb.jpg', name: '奇索斯山脉，大弯国家公园，德克萨斯州，美国 (© Dean Fikar/Getty Images)' },
        { src: './images/2025-06-11.jpg', thumb: './images/2025-06-11_thumb.jpg', name: '大红鹳，吕德里茨，纳米比亚 (© Karine Aigner/TANDEM Stills + Motion)' },
        { src: './images/2025-06-10.jpg', thumb: './images/2025-06-10_thumb.jpg', name: '大沼泽地国家公园的鸟瞰图，佛罗里达州，美国 (© Robert DelVecchio - OcuDrone/Getty Images)' },
        { src: './images/2025-06-09.jpg', thumb: './images/2025-06-09_thumb.jpg', name: '达尔马提亚的杜布罗夫尼克古城，克罗地亚 (© bluejayphoto/Getty Images)' },
        { src: './images/2025-06-08.jpg', thumb: './images/2025-06-08_thumb.jpg', name: '北海狮, 温哥华岛, 不列颠哥伦比亚省, 加拿大 (© Steve Woods Photography/Getty Images)' },
        { src: './images/2025-06-07.jpg', thumb: './images/2025-06-07_thumb.jpg', name: '松山顶峰, 洛杉矶国家森林公园, 加利福尼亚州, 美国 (© Matthew Kuhns/TANDEM Stills + Motion)' },
        { src: './images/2025-06-06.jpg', thumb: './images/2025-06-06_thumb.jpg', name: '诺曼底的阿罗芒什莱班 , 法国 (© Horia Merla/Getty Images)' },
        { src: './images/2025-06-05.jpg', thumb: './images/2025-06-05_thumb.jpg', name: '福玛萨瀑布，迪亚曼蒂纳，巴西 (© Pulsar Images/Alamy)' },
        { src: './images/2025-06-04.jpg', thumb: './images/2025-06-04_thumb.jpg', name: '卡拉卢纳海滩, 撒丁岛, 意大利 (© guenterguni/Getty Images)' },
        { src: './images/2025-06-03.jpg', thumb: './images/2025-06-03_thumb.jpg', name: '乌得勒支桥上的自行车，荷兰 (© George Pachantouris/Getty Images)' },
        { src: './images/2025-06-02.jpg', thumb: './images/2025-06-02_thumb.jpg', name: '一只停在紫锥菊上的灰蝶，洛克菲勒州立公园，纽约 (© Marianne A. Campolongo/Alamy)' },
        { src: './images/2025-06-01.jpg', thumb: './images/2025-06-01_thumb.jpg', name: '格朗特尔岛附近的堡礁，法属新喀里多尼亚 (© Karsten Wrobel/Getty Images)' },
        { src: './images/2025-05-31.jpg', thumb: './images/2025-05-31_thumb.jpg', name: '用彩色丝线串成的香囊，端午节前夕的庙会上，吉林省吉林市，中国 (© Visual China Group/Getty Images)' },
        { src: './images/2025-05-30.jpg', thumb: './images/2025-05-30_thumb.jpg', name: '小鸽子河，大雾山国家公园，田纳西州, 美国 (© GreenStock/Getty Images)' },
        { src: './images/2025-05-29.jpg', thumb: './images/2025-05-29_thumb.jpg', name: '米拉韦特，埃布罗河，加泰罗尼亚塔，西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2025-05-28.jpg', thumb: './images/2025-05-28_thumb.jpg', name: '一只海獭漂浮在阿拉斯加海洋国家野生动物保护区的海藻床上，美国 (© Gerry Ellis/Minden Pictures)' },
        { src: './images/2025-05-27.jpg', thumb: './images/2025-05-27_thumb.jpg', name: '梦娜维尔岩池，悉尼，澳大利亚 (© jamenpercy/Getty Images)' },
        { src: './images/2025-05-26.jpg', thumb: './images/2025-05-26_thumb.jpg', name: '沿着岚山保津川行驶的火车，京都，日本 (© Alvin Huang/Getty Images)' },
        { src: './images/2025-05-25.jpg', thumb: './images/2025-05-25_thumb.jpg', name: '布伦特伍德湾的布查特花园，不列颠哥伦比亚省，加拿大 (© 2009fotofriends/Shutterstock)' },
        { src: './images/2025-05-24.jpg', thumb: './images/2025-05-24_thumb.jpg', name: '挪威尤通黑门山国家公园 (© Marisa Estivill/Shutterstock)' },
        { src: './images/2025-05-23.jpg', thumb: './images/2025-05-23_thumb.jpg', name: '停在黄头侧颈龟鼻子上的茱莉亚蝶，亚马逊地区，厄瓜多尔 (© Westend61/Getty Images)' },
        { src: './images/2025-05-22.jpg', thumb: './images/2025-05-22_thumb.jpg', name: '日落时分的猴面包树，猴面包树大道，马达加斯加 (© Framalicious/Shutterstock)' },
        { src: './images/2025-05-21.jpg', thumb: './images/2025-05-21_thumb.jpg', name: '杨家塘村茶园，松阳县，中国 (© feng xu/Getty Images)' },
        { src: './images/2025-05-20.jpg', thumb: './images/2025-05-20_thumb.jpg', name: '薰衣草上的蜜蜂 (© Anthony Brown/Alamy Stock Photo)' },
        { src: './images/2025-05-19.jpg', thumb: './images/2025-05-19_thumb.jpg', name: '汉密尔顿山, 旧金山湾区, 加利福尼亚, 美国 (© Jeffrey Lewis/TANDEM Stills + Motion)' },
        { src: './images/2025-05-18.jpg', thumb: './images/2025-05-18_thumb.jpg', name: '加龙河对面的圣皮埃尔桥，图卢兹，法国 (© Image Professionals GmbH/Alamy)' },
        { src: './images/2025-05-17.jpg', thumb: './images/2025-05-17_thumb.jpg', name: '威尼斯潟湖中的三角洲, 意大利 (© Dimitri Weber/Amazing Aerial Agency)' },
        { src: './images/2025-05-16.jpg', thumb: './images/2025-05-16_thumb.jpg', name: '大绿金刚鹦鹉, 墨西哥 (© Ondrej Prosicky/Shutterstock)' },
        { src: './images/2025-05-15.jpg', thumb: './images/2025-05-15_thumb.jpg', name: '大本钟和国会大厦, 威斯敏斯特宫, 伦敦, 英国 (© Puthipong Worasaran/Getty Images)' },
        { src: './images/2025-05-14.jpg', thumb: './images/2025-05-14_thumb.jpg', name: '弗拉维亚港, 苏尔西斯-伊格莱西恩特, 撒丁岛, 意大利 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2025-05-13.jpg', thumb: './images/2025-05-13_thumb.jpg', name: '百内国家公园, 巴塔哥尼亚, 智利 (© Marco Bottigelli/Getty Images)' },
        { src: './images/2025-05-12.jpg', thumb: './images/2025-05-12_thumb.jpg', name: '东京的鸢尾花园, 日本 (© M.Arai/Getty Images)' },
        { src: './images/2025-05-11.jpg', thumb: './images/2025-05-11_thumb.jpg', name: '豹妈妈正在梳理她的幼崽，Jao保护区，博茨瓦纳 (© Suzi Eszterhas/Minden Pictures)' },
        { src: './images/2025-05-10.jpg', thumb: './images/2025-05-10_thumb.jpg', name: '巴尔德纳斯雷亚尔斯自然公园的卡斯蒂尔德蒂拉，纳瓦拉，西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2025-05-09.jpg', thumb: './images/2025-05-09_thumb.jpg', name: '普通变色龙 (© Photostock-Israel/SPL/Getty Images)' },
        { src: './images/2025-05-08.jpg', thumb: './images/2025-05-08_thumb.jpg', name: 'Rhyolite附近山谷中的驴子，内华达州，美国 (© Moelyn Photos/Getty Images)' },
        { src: './images/2025-05-07.jpg', thumb: './images/2025-05-07_thumb.jpg', name: '邓路斯城堡，安特里姆郡，北爱尔兰 (© DieterMeyrl/Getty Images)' },
        { src: './images/2025-05-06.jpg', thumb: './images/2025-05-06_thumb.jpg', name: '一架超轻型飞机飞越纳米比亚沙漠 (© Burt Johnson/Alamy Stock Photo)' },
        { src: './images/2025-05-05.jpg', thumb: './images/2025-05-05_thumb.jpg', name: '日出时分，美丽的喀斯特山脉鸟瞰图，中国桂林 (© zhaojiankang/Getty Images)' },
        { src: './images/2025-05-04.jpg', thumb: './images/2025-05-04_thumb.jpg', name: '西班牙广场，塞维利亚，西班牙 (© Horia Merla/Getty Images)' },
        { src: './images/2025-05-03.jpg', thumb: './images/2025-05-03_thumb.jpg', name: '拱门国家公园双拱门映衬下的银河，犹他州，美国 (© Adventure_Photo/Getty Images)' },
        { src: './images/2025-05-02.jpg', thumb: './images/2025-05-02_thumb.jpg', name: '维多利亚睡莲上的绿鹭，潘塔纳尔 ，巴西 (© Gerald Corsi/Getty Images)' },
        { src: './images/2025-05-01.jpg', thumb: './images/2025-05-01_thumb.jpg', name: '鸡蛋花，夏威夷，美国 (© Miranda Jans/Getty Images)' },
        { src: './images/2025-04-30.jpg', thumb: './images/2025-04-30_thumb.jpg', name: '从巴拉那州看到的伊瓜苏瀑布, 巴西 (© agustavop/Getty Images)' },
        { src: './images/2025-04-29.jpg', thumb: './images/2025-04-29_thumb.jpg', name: '维朗德里城堡，卢瓦尔河谷，法国 (© Mint Images/Getty Images)' },
        { src: './images/2025-04-28.jpg', thumb: './images/2025-04-28_thumb.jpg', name: '莫雷米野生动物保护区的高角羚，博茨瓦纳 (© Paul Souders/Getty Images)' },
        { src: './images/2025-04-27.jpg', thumb: './images/2025-04-27_thumb.jpg', name: '红木国家公园和州立公园, 加利福尼亚州, 美国 (© Bob Pool/Getty Images)' },
        { src: './images/2025-04-26.jpg', thumb: './images/2025-04-26_thumb.jpg', name: '印第安头湾, 布鲁斯半岛国家公园, 安大略, 加拿大 (© Maurice Prokaziuk/Getty Images)' },
        { src: './images/2025-04-25.jpg', thumb: './images/2025-04-25_thumb.jpg', name: '麦哲伦企鹅, 志愿者角, 福克兰群岛 (© imageBROKER/Matthias Graben/Getty Images)' },
        { src: './images/2025-04-24.jpg', thumb: './images/2025-04-24_thumb.jpg', name: '阿拉斯加基奈峡湾国家公园尖顶湾, 阿拉斯加州苏厄德, 美国 (© Wander Photography/Getty Images)' },
        { src: './images/2025-04-23.jpg', thumb: './images/2025-04-23_thumb.jpg', name: '海利根港斯坦沃德海滩上的沙滩椅，石勒苏益格-荷尔斯泰因州，德国 (© Frank Lukasseck/eStock Photo)' },
        { src: './images/2025-04-22.jpg', thumb: './images/2025-04-22_thumb.jpg', name: '大棱镜彩泉，黄石国家公园，怀俄明州，美国 (© Ajith Kumar/Getty Images)' },
        { src: './images/2025-04-21.jpg', thumb: './images/2025-04-21_thumb.jpg', name: '银河下的约书亚树，加利福尼亚州，美国 (© Chao Zhang/Getty Images)' },
        { src: './images/2025-04-20.jpg', thumb: './images/2025-04-20_thumb.jpg', name: '春天里的野生小兔子 (© Fiona McAllister Photography/Getty Images)' },
        { src: './images/2025-04-19.jpg', thumb: './images/2025-04-19_thumb.jpg', name: '锡安国家公园，犹他州，美国 (© Simon Dannhauer/Getty Images)' },
        { src: './images/2025-04-18.jpg', thumb: './images/2025-04-18_thumb.jpg', name: '卡帕多西亚格雷梅国家公园上空的热气球，土耳其 (© Anton Petrus/Getty Images)' },
        { src: './images/2025-04-17.jpg', thumb: './images/2025-04-17_thumb.jpg', name: '安第斯动冠伞鸟，厄瓜多尔 (© Kit Day/Alamy Stock Photo)' },
        { src: './images/2025-04-16.jpg', thumb: './images/2025-04-16_thumb.jpg', name: '卡奇纳桥，天然桥国家区，犹他州，美国 (© Alan Majchrowicz/Getty Images)' },
        { src: './images/2025-04-15.jpg', thumb: './images/2025-04-15_thumb.jpg', name: '卡拉奥拉城堡，格拉纳达，西班牙 (© Ugo Mellone/eStock Photo)' },
        { src: './images/2025-04-14.jpg', thumb: './images/2025-04-14_thumb.jpg', name: '圣玛丽亚岛附近的大西洋细吻海豚，亚速尔群岛，葡萄牙 (© Jordi Chias/Minden Pictures)' },
        { src: './images/2025-04-13.jpg', thumb: './images/2025-04-13_thumb.jpg', name: '班克鲁特的唐赛寺，泰国 (© Ratnakorn Piyasirisorost/Getty Images)' },
        { src: './images/2025-04-12.jpg', thumb: './images/2025-04-12_thumb.jpg', name: '从国际空间站穹顶俯瞰南太平洋 (© NASA)' },
        { src: './images/2025-04-11.jpg', thumb: './images/2025-04-11_thumb.jpg', name: '郁金香，荷兰 (© 1111IESPDJ/Getty Images)' },
        { src: './images/2025-04-10.jpg', thumb: './images/2025-04-10_thumb.jpg', name: '靠近巢穴的红狐幼崽 (© WildMedia/Shutterstock)' },
        { src: './images/2025-04-09.jpg', thumb: './images/2025-04-09_thumb.jpg', name: '纳克索斯岛的蓝色时刻，基克拉泽斯群岛，希腊 (© Sizun Eye/Getty Images)' },
        { src: './images/2025-04-08.jpg', thumb: './images/2025-04-08_thumb.jpg', name: '春天的水仙花在清晨绽放 (© LedyX/Shutterstock)' },
        { src: './images/2025-04-07.jpg', thumb: './images/2025-04-07_thumb.jpg', name: '美洲海狸, Moran, 怀俄明州, 美国 (© Enrique Aguirre Aves/Getty Images)' },
        { src: './images/2025-04-06.jpg', thumb: './images/2025-04-06_thumb.jpg', name: '碎片大厦，伦敦 (© Dennis Fischer Photography/Moment/Getty Images)' },
        { src: './images/2025-04-05.jpg', thumb: './images/2025-04-05_thumb.jpg', name: '日落时分的加兹特鲁加特岛 , 巴斯克地区, 西班牙 (© Eloi_Omella/Getty Images)' },
        { src: './images/2025-04-04.jpg', thumb: './images/2025-04-04_thumb.jpg', name: '苏州古镇风景，江苏省，中国 (© gyn9038/Getty Images)' },
        { src: './images/2025-04-03.jpg', thumb: './images/2025-04-03_thumb.jpg', name: '沃森峰上空的彩虹, 巨人柱国家公园, 亚利桑那州, 美国 (© Frank Staub/Getty Images)' },
        { src: './images/2025-04-02.jpg', thumb: './images/2025-04-02_thumb.jpg', name: '凯恩维尔附近荒地的砂岩地层, 犹他州, 美国 (© Chris Moore/TANDEM Stills + Motion)' },
        { src: './images/2025-04-01.jpg', thumb: './images/2025-04-01_thumb.jpg', name: '树蛙, 哥斯达黎加 (© Ondrej Prosicky/Shutterstock)' },
        { src: './images/2025-03-31.jpg', thumb: './images/2025-03-31_thumb.jpg', name: '黄昏下的奥斯图尼, 普利亚, 意大利 (© Feng Wei Photography/Getty Images)' },
        { src: './images/2025-03-30.jpg', thumb: './images/2025-03-30_thumb.jpg', name: '悉尼港鸟瞰图，新南威尔士州，澳大利亚 (© jamenpercy/Getty Images)' },
        { src: './images/2025-03-29.jpg', thumb: './images/2025-03-29_thumb.jpg', name: '卡里佐平原国家纪念碑的超级花期，加利福尼亚州，美国 (© Robb Hirsch/TANDEM Stills + Motion)' },
        { src: './images/2025-03-28.jpg', thumb: './images/2025-03-28_thumb.jpg', name: '正在筑巢的雌性黑枕王鹟 (© komkrit tonusin/Alamy)' },
        { src: './images/2025-03-27.jpg', thumb: './images/2025-03-27_thumb.jpg', name: '希罗德·阿提库斯剧场，雅典卫城，希腊 (© f11photo/Getty Images)' },
        { src: './images/2025-03-26.jpg', thumb: './images/2025-03-26_thumb.jpg', name: '水晶河的海牛，佛罗里达州，美国 (© Stephen Frink/Getty Images)' },
        { src: './images/2025-03-25.jpg', thumb: './images/2025-03-25_thumb.jpg', name: '向日葵田里的红额金翅雀，德国 (© Juniors Bildarchiv GmbH/Alamy)' },
        { src: './images/2025-03-24.jpg', thumb: './images/2025-03-24_thumb.jpg', name: '沙漠象与小象在高高的草丛中觅食，纳米比亚 (© Christophe Courteau/Minden Pictures)' },
        { src: './images/2025-03-23.jpg', thumb: './images/2025-03-23_thumb.jpg', name: '鲍曼附近日落时分的闪电和风暴云，布拉斯加州，美国 (© john finney photography/Getty Images)' },
        { src: './images/2025-03-22.jpg', thumb: './images/2025-03-22_thumb.jpg', name: '尼特哈天然井水面上的睡莲，图卢姆，墨西哥 (© Franco Banfi/NPL/Minden)' },
        { src: './images/2025-03-21.jpg', thumb: './images/2025-03-21_thumb.jpg', name: '低地雨林上空的薄雾，丹浓谷，沙巴，婆罗洲，马来西亚 (© Nick Garbutt/Alamy)' },
        { src: './images/2025-03-20.jpg', thumb: './images/2025-03-20_thumb.jpg', name: '美丽盛开的樱花，杭州的春天，中国 (© zhang shuang/Getty Images)' },
        { src: './images/2025-03-19.jpg', thumb: './images/2025-03-19_thumb.jpg', name: '黑鹭捕鱼，乔贝国家公园，博茨瓦纳 (© Paul Souders/Minden PIctures)' },
        { src: './images/2025-03-18.jpg', thumb: './images/2025-03-18_thumb.jpg', name: '红色岩层，塞多纳，亚利桑那州，美国 (© Jim Ekstrand/Alamy Stock Photo)' },
        { src: './images/2025-03-17.jpg', thumb: './images/2025-03-17_thumb.jpg', name: '塞缪尔·贝克特桥, 都柏林, 爱尔兰 (© Colm Keating/Tandem Stills + Motion)' },
        { src: './images/2025-03-16.jpg', thumb: './images/2025-03-16_thumb.jpg', name: '雪地里的大熊猫宝宝，中国 (© Cheryl Schneider/Alamy Stock Photo)' },
        { src: './images/2025-03-15.jpg', thumb: './images/2025-03-15_thumb.jpg', name: '罗马广场上的罗马萨图尔诺农神庙，罗马，意大利 (© Nico De Pasquale Photography/Getty Images)' },
        { src: './images/2025-03-14.jpg', thumb: './images/2025-03-14_thumb.jpg', name: '索尔吉奈特克斯的巨石墓，巴斯克地区，阿拉瓦省，西班牙 (© David Herraez Calzada/plainpicture)' },
        { src: './images/2025-03-12.jpg', thumb: './images/2025-03-12_thumb.jpg', name: '卢瓦尔河畔叙利城堡, 卢瓦尔中心省, 法国 (© StockPhotoAstur/Shutterstock)' },
        { src: './images/2025-03-11.jpg', thumb: './images/2025-03-11_thumb.jpg', name: '努沙佩尼达岛的破碎海滩, 巴厘岛, 印度尼西亚 (© joakimbkk/Getty Images)' },
        { src: './images/2025-03-10.jpg', thumb: './images/2025-03-10_thumb.jpg', name: '在伊沙沙区里正在睡觉的狮子，伊丽莎白女王国家公园，乌干达 (© Gunter Nuyts/Getty Images)' },
        { src: './images/2025-03-09.jpg', thumb: './images/2025-03-09_thumb.jpg', name: '圣马可钟楼，威尼斯，意大利 (© scaliger/Getty Images)' },
        { src: './images/2025-03-08.jpg', thumb: './images/2025-03-08_thumb.jpg', name: '石勒苏益格-荷尔斯泰因州瓦登海国家公园，德国 (© 3quarks/Getty Images)' },
        { src: './images/2025-03-07.jpg', thumb: './images/2025-03-07_thumb.jpg', name: '中国的梅花 (© zhikun sun/Getty Images)' },
        { src: './images/2025-03-06.jpg', thumb: './images/2025-03-06_thumb.jpg', name: '沙漠大角羊，内华达州火焰谷州立公园，美国 (© Rachid Dahnoun/Cavan Images)' },
        { src: './images/2025-03-05.jpg', thumb: './images/2025-03-05_thumb.jpg', name: '俯瞰拷索山林国家公园，素叻府，泰国 (© Peetatham Kongkapech/Getty Images)' },
        { src: './images/2025-03-04.jpg', thumb: './images/2025-03-04_thumb.jpg', name: '杰克逊广场，新奥尔良，路易斯安那州，美国 (© SeanPavonePhoto/Getty Images)' },
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
