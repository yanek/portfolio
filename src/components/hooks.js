import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { LocaleContext } from './App';
import { LocaleData } from '../locale';

/**
 *
 * @returns {{width: number, height: number}}
 */
export function useWindowDimensions() {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

/**
 * @returns {[LocaleData, () => void]}
 */
export function useToggleLocale() {
  const toggle = (l) => (l.id === 'fr' ? LocaleData.EN : LocaleData.FR);
  const { locale: current, setLocale: setCurrent } = useContext(LocaleContext);
  const [target, setTarget] = useState(toggle(current));
  const toggleLocale = () => {
    setCurrent(target);
    setTarget(toggle(target));
    target.save();
  };

  return [target, toggleLocale];
}
