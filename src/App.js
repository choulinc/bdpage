import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import confetti from 'canvas-confetti';
import { ChevronDown, Search, ThumbsUp, ThumbsDown, Download, MoreHorizontal, Bell, Menu, User, Share, ChevronLeft, ChevronRight } from 'lucide-react';

const anchors = ['firstPage', 'secondPage', 'thirdPage', 'forthPage'];

// Bloomberg Navbar Component - 重新設計
const BloombergNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bloomberg-nav">
      {/* Logo 區域 - 上層 */}
      <div className="logo-row">
        <div className="bloomberg-logo">Bloomberg</div>
      </div>
      
      {/* 導航項目區域 - 下層 */}
      <div className="nav-row">
        {/* 主要導航項目 */}
        <div className="nav-items">
          {/* Live TV */}
          <div className="nav-item">
            <div className="live-dot"></div>
            <span>Live TV</span>
          </div>

          {/* Markets */}
          <div 
            className="nav-item dropdown-item"
            onMouseEnter={() => setActiveDropdown('markets')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span>Markets</span>
            <ChevronDown size={12} className="dropdown-arrow" />
          </div>

          {/* Economics */}
          <div className="nav-item">
            <span>Economics</span>
          </div>

          {/* Industries */}
          <div className="nav-item">
            <span>Industries</span>
          </div>

          {/* Tech */}
          <div className="nav-item">
            <span>Tech</span>
          </div>

          {/* Politics */}
          <div className="nav-item">
            <span>Politics</span>
          </div>

          {/* Businessweek */}
          <div className="nav-item">
            <span>Businessweek</span>
          </div>

          {/* Opinion */}
          <div className="nav-item">
            <span>Opinion</span>
          </div>

          {/* More */}
          <div 
            className="nav-item dropdown-item"
            onMouseEnter={() => setActiveDropdown('more')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span>More</span>
            <ChevronDown size={12} className="dropdown-arrow" />
          </div>
        </div>

        {/* 右側項目 */}
        <div className="nav-right">
          {/* Asia Edition */}
          <div 
            className="nav-item dropdown-item"
            onMouseEnter={() => setActiveDropdown('asia')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span>Asia Edition</span>
            <ChevronDown size={12} className="dropdown-arrow" />
          </div>

          {/* Sign In */}
          <div className="nav-item">
            <span>Sign In</span>
          </div>

          {/* Subscribe Button */}
          <button className="subscribe-btn">Subscribe</button>

          {/* Search Icon */}
          <div className="search-icon">
            <Search size={16} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const YouTubePage = () => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const recommendedVideos = [
    {
      id: 1,
      title: "岡崎體育 / MUSIC VIDEO～你不可不知的35個MV拍攝必勝術～ (中字完整版)",
      channel: "台灣索尼音樂 Sony Music Taiwan",
      views: "240K",
      time: "9 年前",
      duration: "4:27",
      thumbnail: `${process.env.PUBLIC_URL}/pic/mv.png`
    },
    {
      id: 2,
      title: "[挑戰] 挑戰在雪中冥想24小時",
      channel: "起鵝",
      views: "56K",
      time: "3 天前",
      duration: "15:32",
      thumbnail: `${process.env.PUBLIC_URL}/pic/peng.jpg`
    },
    {
      id: 3,
      title: "Good Kid - From The Start (Laufey Cover)",
      channel: "Good Kid",
      views: "46M",
      time: "1 年前",
      duration: "2:30",
      thumbnail: `${process.env.PUBLIC_URL}/pic/fts.png`
    },
    {
      id: 4,
      title: "我登上了全美最大的音樂節！",
      channel: "周霖",
      views: "962M",
      time: "6 天前",
      duration: "25:42",
      thumbnail: `${process.env.PUBLIC_URL}/pic/cl.jpg`
    },
    {
      id: 5,
      title: "日本京都全攻略（vlog）",
      channel: "hakaheng",
      views: "44K",
      time: "1 week ago",
      duration: "31:27",
      thumbnail: `${process.env.PUBLIC_URL}/pic/jpjp.png`
    },
    {
      id: 6,
      title: "不老也不年輕的日子",
      channel: "周霖",
      views: "852M",
      time: "3 周前",
      duration: "10:15",
      thumbnail: `${process.env.PUBLIC_URL}/pic/clcl.JPG`
    }
  ];

  const comments = [
    {
      id: 1,
      user: "John Mayer",
      avatar: `${process.env.PUBLIC_URL}/pic/JM.jpg`,
      time: "2 hours ago",
      text: "Insane 🔥🔥🔥, join my band plz",
      likes: 15
    },
    {
      id: 2,
      user: "Fuji Kaze",
      avatar: `${process.env.PUBLIC_URL}/pic/fk.jpg`,
      time: "5 hours ago",
      text: "すげー！！！！",
      likes: 8
    },
    {
      id: 3,
      user: "Elon Musk",
      avatar: `${process.env.PUBLIC_URL}/pic/em.webp`,
      time: "1 day ago",
      text: "STOP BEATING ME IN BILLIONAIRES LIST",
      likes: 3
    }
  ];

  return (
    <div className="youtube-page">
      {/* YouTube Header */}
      <header className="youtube-header">
        <div className="header-left">
          <Menu size={24} className="menu-icon" />
          <div className="youtube-logo">
            <span className="logo-text"><img src={`${process.env.PUBLIC_URL}/pic/ytlogo.webp`} style={{
                    width: '2vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}/> Premium</span>
          </div>
        </div>
        
        <div className="header-center">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="搜尋" 
              className="search-input"
            />
            <button className="search-button">
              <Search size={20} />
            </button>
          </div>
        </div>
        
        <div className="header-right">
          <Bell size={24} className="header-icon" />
          <User size={24} className="header-icon" />
        </div>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Column - Video Player */}
        <div className="video-column">
          {/* Video Player */}
          <div className="video-player">
          <iframe className="ytvideo" width="560" height="315" src="https://www.youtube.com/embed/Y3lpT8NAnS8?si=q7yS6vYX_40ScfFN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            {/*<div className="fake-video">
              <div className="play-button">▶</div>
              <div className="video-overlay">
                <span>React 完整教學 - 從零開始學習</span>
              </div>
            </div>*/}
          </div>

          {/* Video Info */}
          <div className="video-info">
            <h1 className="video-title">
            Good Kid - Summer feat.周霖
            </h1>
            
            <div className="video-meta">
              <span className="video-views">9,283,862,547,892 次觀看</span>
              <span className="video-date">2025年8月12日</span>
            </div>

            <div className="video-actions">
              <button 
                className={`action-btn ${liked ? 'active' : ''}`}
                onClick={() => {
                  setLiked(!liked);
                  if (disliked) setDisliked(false);
                }}
              >
                <ThumbsUp size={20} />
                <span>5兆</span>
              </button>
              
              <button 
                className={`action-btn ${disliked ? 'active' : ''}`}
                onClick={() => {
                  setDisliked(!disliked);
                  if (liked) setLiked(false);
                }}
              >
                <ThumbsDown size={20} />
              </button>
              
              <button className="action-btn">
                <Share size={20} />
                <span>分享</span>
              </button>
              
              <button className="action-btn">
                <Download size={20} />
                <span>下載</span>
              </button>
              
              <button className="action-btn">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>

          {/* Channel Info */}
          <div className="channel-info" src="https://www.youtube.com/@chilling5138">
            <div className="channel-left">
              <img 
                src="https://yt3.googleusercontent.com/zL9Wq7qH4v9eT8rKIckdwl_1ZkEIHygx-dSMmRV4uqWdSVHPFVR_3oI9wcsmNCeBJOHfSonl4w=s160-c-k-c0x00ffffff-no-rj" 
                alt="Channel Avatar" 
                className="channel-avatar"
              />
              <div className="channel-details">
                <h3 className="channel-name">周霖</h3>
                <span className="channel-subscribers">3兆 位訂閱者</span>
              </div>
            </div>
            
            <button 
              className={`subscribe-btn ${subscribed ? 'subscribed' : ''}`}
              onClick={() => setSubscribed(!subscribed)}
            >
              <Bell size={16} />
              {subscribed ? '已訂閱' : '訂閱'}
            </button>
          </div>

          {/* Video Description */}
          <div className="video-description">
            <p>
            多希望這一刻 不是一個夏天而已
            </p>
            <p>
            I'll glue it all
            </p>
            <div className="description-tags">
              #GoodKid #Summer
            </div>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <div className="comments-header">
              <h3>留言 {comments.length}</h3>
            </div>
            
            <div className="comment-input">
              <img 
                src={`${process.env.PUBLIC_URL}/pic/aher.png`} 
                alt="Your Avatar" 
                className="comment-avatar"
              />
              <input 
                type="text" 
                placeholder="新增留言..."
                className="comment-input-field"
              />
            </div>

            <div className="comments-list">
              {comments.map(comment => (
                <div key={comment.id} className="comment">
                  <img 
                    src={comment.avatar} 
                    alt={comment.user}
                    className="comment-avatar"
                  />
                  <div className="comment-content">
                    <div className="comment-header">
                      <span className="comment-user">{comment.user}</span>
                      <span className="comment-time">{comment.time}</span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                    <div className="comment-actions">
                      <button className="comment-like">
                        <ThumbsUp size={16} />
                        {comment.likes}
                      </button>
                      <button className="comment-dislike">
                        <ThumbsDown size={16} />
                      </button>
                      <button className="comment-reply">回覆</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Recommended Videos */}
        <div className="recommendations-column">
          <h3 className="recommendations-title">推薦影片</h3>
          
          {recommendedVideos.map(video => (
            <div key={video.id} className="recommended-video">
              <div className="rec-video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <span className="video-duration">{video.duration}</span>
              </div>
              
              <div className="rec-video-info">
                <h4 className="rec-video-title">{video.title}</h4>
                <p className="rec-video-channel">{video.channel}</p>
                <div className="rec-video-meta">
                  <span>{video.views} 次觀看</span>
                  <span>•</span>
                  <span>{video.time}</span>
                </div>
              </div>
              
              <button className="rec-video-options">
                <MoreHorizontal size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NetflixPage = () => {
  const [scrollPositions, setScrollPositions] = useState({
    adventure: 0,
    asian: 0,
    netflix: 0
  });

  const adventureContent = [
    { id: 1, title: '超人', image: `${process.env.PUBLIC_URL}/pic/mv1.jpg`, isNew: true },
    { id: 2, title: '夜校女生', image: `${process.env.PUBLIC_URL}/pic/mv2.jpeg`, isNew: true },
    { id: 3, title: '絕命律師', image: `${process.env.PUBLIC_URL}/pic/mv3.JPG`, isNew: false },
    { id: 4, title: '柯南', image: `${process.env.PUBLIC_URL}/pic/mv4.jpg`, isNew: false },
    { id: 5, title: '白日夢冒險王', image: `${process.env.PUBLIC_URL}/pic/mv5.jpg`, isNew: false },
    { id: 6, title: '大賣空', image: `${process.env.PUBLIC_URL}/pic/mv6.webp`, isNew: false }
  ];

  const asianContent = [
    { id: 1, title: 'JoJo 的奇妙冒險', image: `${process.env.PUBLIC_URL}/pic/mv11.webp`, isNew: true, isTop10: true },
    { id: 2, title: '水', image: `${process.env.PUBLIC_URL}/pic/mv12.jpeg`, isNew: true, isTop10: true, isPopular: true },
    { id: 3, title: '愛x 死x 機器人', image: `${process.env.PUBLIC_URL}/pic/mv13.webp`, isNew: false },
    { id: 4, title: '伊藤潤二狂熱：日本恐怖故事', image: `${process.env.PUBLIC_URL}/pic/mv14.jpeg`, isNew: false },
    { id: 5, title: '成功路上', image: '', isNew: false },
    { id: 6, title: '拜六禮拜', image: '', isNew: true, isPopular: true }
  ];

  const netflixContent = [
    { id: 1, title: '星期三', image: '', isNew: true, isTop10: true },
    { id: 2, title: 'BURN AFTER READING', image: '', isNew: false },
    { id: 3, title: '不良偵探', image: '', isNew: false },
    { id: 4, title: 'IN & OUT', image: '', isNew: false },
    { id: 5, title: '美式足球實況轉播', image: '', isNew: false },
    { id: 6, title: '超級印象', image: '', isNew: true, isPopular: true }
  ];

  const scroll = (section, direction) => {
    setScrollPositions(prev => ({
      ...prev,
      [section]: Math.max(0, prev[section] + (direction === 'left' ? -300 : 300))
    }));
  };

  const styles = {
    container: {
      backgroundColor: '#000',
      minHeight: '100vh',
      width: '100vw',
      color: '#fff',
      fontFamily: 'Arial, sans-serif'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '24px',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '32px'
    },
    logo: {
      color: '#e50914',
      fontSize: '28px',
      fontWeight: 'bold',
      letterSpacing: '1px'
    },
    nav: {
      display: 'flex',
      gap: '24px',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s',
      cursor: 'pointer'
    },
    headerRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    iconButton: {
      color: '#fff',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
      transition: 'color 0.3s'
    },
    notificationContainer: {
      position: 'relative'
    },
    badge: {
      position: 'absolute',
      top: '-4px',
      right: '-4px',
      backgroundColor: '#e50914',
      color: '#fff',
      fontSize: '10px',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    avatar: {
      backgroundColor: '#1e90ff',
      borderRadius: '50%',
      padding: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    main: {
      padding: '32px 24px'
    },
    section: {
      marginBottom: '32px'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    sectionTitle: {
      color: '#fff',
      fontSize: '20px',
      fontWeight: 'bold',
      margin: 0
    },
    controls: {
      display: 'flex',
      gap: '8px'
    },
    controlButton: {
      color: '#fff',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
      transition: 'color 0.3s'
    },
    contentContainer: {
      position: 'relative',
      overflow: 'hidden'
    },
    contentRow: {
      display: 'flex',
      gap: '8px',
      transition: 'transform 0.3s ease'
    },
    contentItem: {
      flexShrink: 0,
      position: 'relative',
      cursor: 'pointer'
    },
    contentImage: {
      width: '192px',
      height: '112px',
      backgroundColor: '#333',
      borderRadius: '4px',
      position: 'relative',
      overflow: 'hidden'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s'
    },
    imageHover: {
      transform: 'scale(1.05)'
    },
    badge_new: {
      position: 'absolute',
      top: '8px',
      left: '8px',
      backgroundColor: '#e50914',
      color: '#fff',
      fontSize: '10px',
      padding: '4px 8px',
      borderRadius: '2px'
    },
    badge_top10: {
      position: 'absolute',
      top: '8px',
      left: '8px',
      backgroundColor: '#e50914',
      color: '#fff',
      fontSize: '10px',
      padding: '4px 8px',
      borderRadius: '2px',
      display: 'flex',
      alignItems: 'center'
    },
    top10Icon: {
      backgroundColor: '#fff',
      color: '#e50914',
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '8px',
      fontWeight: 'bold',
      marginRight: '4px'
    },
    badge_popular: {
      position: 'absolute',
      top: '8px',
      right: '8px',
      backgroundColor: '#e50914',
      color: '#fff',
      fontSize: '10px',
      padding: '4px 8px',
      borderRadius: '2px'
    },
    imageOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      padding: '12px'
    },
    contentTitle: {
      color: '#fff',
      fontSize: '14px',
      fontWeight: '500',
      margin: 0
    }
  };

  const ContentRow = ({ title, content, sectionKey }) => {
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
      <div style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>{title}</h2>
          <div style={styles.controls}>
            <button 
              onClick={() => scroll(sectionKey, 'left')}
              style={styles.controlButton}
              onMouseEnter={(e) => e.target.style.color = '#ccc'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll(sectionKey, 'right')}
              style={styles.controlButton}
              onMouseEnter={(e) => e.target.style.color = '#ccc'}
              onMouseLeave={(e) => e.target.style.color = '#fff'}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <div style={styles.contentContainer}>
          <div 
            style={{
              ...styles.contentRow,
              transform: `translateX(-${scrollPositions[sectionKey]}px)`
            }}
          >
            {content.map((item) => (
              <div 
                key={item.id} 
                style={styles.contentItem}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div style={styles.contentImage}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      ...styles.image,
                      ...(hoveredItem === item.id ? styles.imageHover : {})
                    }}
                  />
                  {item.isNew && (
                    <div style={styles.badge_new}>
                      新上架
                    </div>
                  )}
                  {item.isTop10 && (
                    <div style={styles.badge_top10}>
                      <span style={styles.top10Icon}>10</span>
                    </div>
                  )}
                  {item.isPopular && (
                    <div style={styles.badge_popular}>
                      熱門上架
                    </div>
                  )}
                  <div style={styles.imageOverlay}>
                    <h3 style={styles.contentTitle}>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <h1 style={styles.logo}>NETFLIX</h1>
          <nav style={styles.nav}>
            <a href="#" style={styles.navLink} 
               onMouseEnter={(e) => e.target.style.color = '#ccc'}
               onMouseLeave={(e) => e.target.style.color = '#fff'}>首頁</a>
            <a href="#" style={styles.navLink}
               onMouseEnter={(e) => e.target.style.color = '#ccc'}
               onMouseLeave={(e) => e.target.style.color = '#fff'}>節目</a>
            <a href="#" style={styles.navLink}
               onMouseEnter={(e) => e.target.style.color = '#ccc'}
               onMouseLeave={(e) => e.target.style.color = '#fff'}>電影</a>
            <a href="#" style={styles.navLink}
               onMouseEnter={(e) => e.target.style.color = '#ccc'}
               onMouseLeave={(e) => e.target.style.color = '#fff'}>遊戲</a>
            <a href="#" style={styles.navLink}
               onMouseEnter={(e) => e.target.style.color = '#ccc'}
               onMouseLeave={(e) => e.target.style.color = '#fff'}>最新熱門影片</a>
            <a href="#" style={styles.navLink}
               onMouseEnter={(e) => e.target.style.color = '#ccc'}
               onMouseLeave={(e) => e.target.style.color = '#fff'}>我的口袋名單</a>
            <a href="#" style={styles.navLink}
               onMouseEnter={(e) => e.target.style.color = '#ccc'}
               onMouseLeave={(e) => e.target.style.color = '#fff'}>按照語言瀏覽</a>
          </nav>
        </div>
        <div style={styles.headerRight}>
          <button style={styles.iconButton}
                  onMouseEnter={(e) => e.target.style.color = '#ccc'}
                  onMouseLeave={(e) => e.target.style.color = '#fff'}>
            <Search size={20} />
          </button>
          <span style={{color: '#fff', fontSize: '14px'}}>兒童專區</span>
          <div style={styles.notificationContainer}>
            <button style={styles.iconButton}
                    onMouseEnter={(e) => e.target.style.color = '#ccc'}
                    onMouseLeave={(e) => e.target.style.color = '#fff'}>
              <Bell size={20} />
            </button>
            <span style={styles.badge}>3</span>
          </div>
          <div style={styles.avatar}>
            <User size={16} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <ContentRow 
          title="冒險動作片" 
          content={adventureContent} 
          sectionKey="adventure"
        />
        
        <ContentRow 
          title="亞洲電影與節目" 
          content={asianContent} 
          sectionKey="asian"
        />
        
        <ContentRow 
          title="Netflix 最新作品" 
          content={netflixContent} 
          sectionKey="netflix"
        />
      </main>
    </div>
  );
};



const App = () => {
  useEffect(() => {
    const duration = 90 * 1000; // 播放 90 秒
    const end = Date.now() + duration;
    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }
      // 左右兩邊噴彩帶
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 250); // 每 250ms 播一次
    // 清除 interval
    return () => clearInterval(interval);
  }, []);

  return (
    <ReactFullpage
      anchors={anchors}
      navigation
      scrollingSpeed={800}
      keyboardScrolling={false}
      render={() => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section-one">
              <h1>高寶寶生日快樂！</h1>
              <div className="pic-wrapper">
                <img src={`${process.env.PUBLIC_URL}/pic/aher.png`}
                  className='aher'
                  style={{
                    width: '14vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
               <img src={`${process.env.PUBLIC_URL}/pic/jp.png`}
                  className='jp'
                  style={{
                    width: '12vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                /> 
                <img src={`${process.env.PUBLIC_URL}/pic/kuromi.png`}
                  className='kuromi'
                  style={{
                    width: '12vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                /> 
                <img src={`${process.env.PUBLIC_URL}/pic/sum.png`}
                  className='sum'
                  style={{
                    width: '12vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                /> 
                <img
                  src={`${process.env.PUBLIC_URL}/pic/IMG_9873.png`}
                  className="mainPic"
                  style={{
                    width: '25vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
                <img src={`${process.env.PUBLIC_URL}/pic/kimono.png`}
                  className='kimono'
                  style={{
                    width: '8vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
                <img src={`${process.env.PUBLIC_URL}/pic/gt.png`}
                  className='gt'
                  style={{
                    width: '26vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
                <img src={`${process.env.PUBLIC_URL}/pic/usj.png`}
                  className='usj'
                  style={{
                    width: '15vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div className="arrow-wrapper">
                <img
                  src={`${process.env.PUBLIC_URL}/down.svg`}
                  alt="Scroll down"
                  className="scroll-down-arrow"
                />
              </div>
            </div>
            <div className="section section-two">
              <BloombergNavbar />
              <div className="section-two-content">
                <h1 className='s2h1'>21-Year-Old Billionaire CEO Lv Kao Celebrates Her Birthday</h1>
                <p>上億身家執行長 Lv Kao 近日在他的私人豪宅與私人遊艇舉辦慶生派對，並邀請知名歌手 John Mayer 、知名樂團 Polyphia、 Good Kid 現場開唱，場面十分壯觀。<br /><br />
                Lv Kao 甚至大方在 Instagram 上曬出與億萬富翁網紅工程師兼知名搖滾樂團吉他手、音樂製作人、量化交易明星 Chilling 的合照， Chilling 還與知名樂團同台演出，此段影片一被發佈到 YouTube 上，就吸引了九兆觀看。</p>
                <img src={`${process.env.PUBLIC_URL}/pic/JM.jpg`}
                  className='JM'
                  style={{
                    width: '33vw',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
            <div className='section section-three'>
                  <YouTubePage />
            </div>
            <div className='section section-four'>
                <NetflixPage />
            </div>
          </div>
        );
      }}
    />
  );
};

export default App;
