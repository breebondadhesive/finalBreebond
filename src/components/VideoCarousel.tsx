'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set());
  const [hasVideos, setHasVideos] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Video sources - looking in /images folder
  const videos = [
    '/images/video1.mp4',
    '/images/video2.mp4',
    '/images/video3.mp4'
  ];

  // Fallback images if videos don't exist
  const fallbackImages = [
    '/images/kim.jpg',
    '/images/kim.jpg',
    '/images/kim.jpg'
  ];

  // Check if videos exist
  const checkVideoAvailability = async () => {
    try {
      const response = await fetch(videos[0], { method: 'HEAD' });
      if (response.ok) {
        setHasVideos(true);
      }
    } catch (error) {
      console.log('Videos not found, using fallback images');
      setHasVideos(false);
    }
    setIsLoading(false);
  };

  // Preload next video
  const preloadVideo = (index: number) => {
    if (loadedVideos.has(index) || !hasVideos) return;
    
    const video = document.createElement('video');
    video.src = videos[index];
    video.preload = 'metadata';
    video.onloadeddata = () => {
      setLoadedVideos(prev => new Set([...prev, index]));
    };
    video.onerror = () => {
      console.log(`Video ${index} failed to load`);
    };
  };

  // Handle video end - swipe to next with smooth transition
  const handleVideoEnd = () => {
    const nextVideo = (currentVideo + 1) % videos.length;
    setCurrentVideo(nextVideo);
    
    // Preload the video after next
    const videoAfterNext = (nextVideo + 1) % videos.length;
    if (hasVideos) {
      preloadVideo(videoAfterNext);
    }
  };

  // Manual navigation functions
  const goToNext = () => {
    handleVideoEnd();
  };

  const goToPrevious = () => {
    const prevVideo = (currentVideo - 1 + videos.length) % videos.length;
    setCurrentVideo(prevVideo);
    
    // Preload the video after previous
    const videoAfterPrev = (prevVideo + 1) % videos.length;
    if (hasVideos) {
      preloadVideo(videoAfterPrev);
    }
  };

  const goToVideo = (index: number) => {
    setCurrentVideo(index);
    
    // Preload next video
    const nextVideo = (index + 1) % videos.length;
    if (hasVideos) {
      preloadVideo(nextVideo);
    }
  };

  // Robust video play function
  const playCurrentVideo = async () => {
    if (!hasVideos) return;
    
    const currentVideoElement = videoRefs.current[currentVideo];
    if (currentVideoElement) {
      try {
        // Reset video to start
        currentVideoElement.currentTime = 0;
        
        // Wait a bit for the video to be ready
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Try to play the video
        await currentVideoElement.play();

      } catch (error: any) {
        // Silently handle video play errors (common in browsers with power-saving)
        // NotAllowedError and AbortError are expected in many scenarios
      }
    }
  };

  // Initialize and check video availability
  useEffect(() => {
    checkVideoAvailability();
  }, []);

  // Initialize videos when available
  useEffect(() => {
    if (hasVideos) {
      // Set up all video elements once
      videoRefs.current.forEach((video, index) => {
        if (video) {
          video.onloadeddata = () => {
            setLoadedVideos(prev => new Set([...prev, index]));
          };
        }
      });
    }
  }, [hasVideos]);

  // Auto-play current video or set timer for images
  useEffect(() => {
    let slideTimer: NodeJS.Timeout; // Define timer variable

    if (hasVideos) {
      // Pause all other videos first
      videoRefs.current.forEach((video, index) => {
        if (video && index !== currentVideo) {
          video.pause();
          video.currentTime = 0;
        }
      });

      // Play current video after a delay
      const playTimer = setTimeout(() => {
        playCurrentVideo();
      }, 300);

      // Fallback timer to advance the slide
      // This ensures the carousel advances even if the video is paused by the browser
      slideTimer = setTimeout(() => {
        handleVideoEnd();
      }, 8000); // 8 seconds, matching the progress bar animation

      return () => {
        clearTimeout(playTimer);
        clearTimeout(slideTimer); // Clear the fallback timer
      };

    } else {
      // Auto-advance for fallback images every 8 seconds
      slideTimer = setTimeout(() => { // Use the same timer variable
        handleVideoEnd();
      }, 8000);
      
      return () => clearTimeout(slideTimer);
    }
  }, [currentVideo, hasVideos]);


  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Splash Screen / Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center z-30"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Splash Content */}
            <div className="relative text-center">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <Image
                  src="/images/logos/BREEBOND LOGO.svg"
                  alt="BREEBOND"
                  width={320}
                  height={90}
                  priority
                  className="mx-auto drop-shadow-2xl"
                  style={{ filter: 'brightness(0) invert(1)', height: 'auto' }}
                />
              </motion.div>

              {/* Loading Animation */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="space-y-4"
              >
                {/* Animated Dots */}
                <div className="flex items-center justify-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>

                {/* Loading Text */}
                <motion.p
                  className="text-sm uppercase tracking-widest text-gray-400"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Loading Premium Experience
                </motion.p>
              </motion.div>

              {/* Bottom Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="mt-12 text-xs uppercase tracking-wider text-gray-600"
              >
                Premium Tile Adhesives
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Container - All videos persistent in DOM */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full h-full"
      >
        {hasVideos ? (
          // Render all videos, show only current one
          videos.map((video, index) => (
            <motion.video
              key={index}
              ref={(el) => { videoRefs.current[index] = el; }}
              className={`absolute inset-0 w-full h-full object-cover opacity-30 ${
                index === currentVideo ? 'z-10' : 'z-0'
              }`}
              muted
              playsInline
              autoPlay={false} // We control play manually
              onEnded={index === currentVideo ? handleVideoEnd : undefined}
              onLoadedData={() => {
                if (index === 0) setIsLoading(false);
              }}
              style={{
                filter: 'brightness(0.7) contrast(1.1)',
                opacity: index === currentVideo ? 0.3 : 0
              }}
              animate={{
                opacity: index === currentVideo ? 0.3 : 0,
                scale: index === currentVideo ? 1 : 1.1
              }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
            >
              <source src={video} type="video/mp4" />
            </motion.video>
          ))
        ) : (
          // Fallback images
          fallbackImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                filter: 'brightness(0.7) contrast(1.1)',
                opacity: index === currentVideo ? 0.3 : 0
              }}
              animate={{
                opacity: index === currentVideo ? 0.3 : 0,
                scale: index === currentVideo ? 1 : 1.1
              }}
              transition={{
                opacity: { duration: 0.5 },
                scale: { duration: 0.5 }
              }}
            />
          ))
        )}
      </motion.div>

      {/* Video Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2 z-30">
        {videos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToVideo(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 hover:scale-110 ${
              index === currentVideo 
                ? 'bg-white scale-110 shadow-md' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-0.5 bg-white/10 rounded-full overflow-hidden z-30">
        <motion.div
          className="h-full bg-white/80 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 8, ease: 'linear' }}
          key={currentVideo}
        />
      </div>

      {/* Manual Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 z-30"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 hover:bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 z-30"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default VideoCarousel;