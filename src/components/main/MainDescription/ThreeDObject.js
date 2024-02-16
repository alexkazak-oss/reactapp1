import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeDObject = () => {
  const mountRef = useRef(null);
  const sphereRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);

  useEffect(() => {
    // Создаем сцену
    const scene = new THREE.Scene();

    // Создаем камеру
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Создаем рендерер
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; // Включаем генерацию теней
    mountRef.current.appendChild(renderer.domElement);

    // Создаем источник света
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(20, 10, 0); // Устанавливаем позицию источника света
    light.castShadow = true; // Включаем генерацию теней от источника света
    scene.add(light);

    // Создаем геометрию и материал для 3D объекта (сферы)
    const geometry = new THREE.SphereGeometry(1, 32, 32); // Параметры: радиус, ширина сегментов, высота сегментов
    const material = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Используем стандартный материал синего цвета

    // Создаем 3D объект (сферу)
    const sphere = new THREE.Mesh(geometry, material);
    sphere.receiveShadow = true; // Включаем прием теней на сфере
    scene.add(sphere);
    sphereRef.current = sphere;

    // Добавляем управление с помощью мыши
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false; // Отключаем увеличение с помощью колеса мыши
    controls.enablePan = false; // Отключаем перемещение с помощью правой кнопки мыши
    controls.update(); // Обновляем управление с помощью мыши

    // Функция для начала перемещения сферы при захвате левой кнопкой мыши
    const handleMouseDown = (event) => {
      isDragging.current = true;
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Функция для перемещения сферы при удерживании левой кнопки мыши
    const handleMouseMove = (event) => {
      if (isDragging.current) {
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse.current, camera);

        const intersects = raycaster.intersectObjects([sphereRef.current]);
        if (intersects.length > 0) {
          const intersectPoint = intersects[0].point;
          sphere.position.copy(intersectPoint);
        }
      }
    };

    // Функция для завершения перемещения сферы при отпускании левой кнопки мыши
    const handleMouseUp = () => {
      isDragging.current = false;
    };

    // Добавляем обработчики событий мыши
    mountRef.current.addEventListener('mousedown', handleMouseDown);
    mountRef.current.addEventListener('mousemove', handleMouseMove);
    mountRef.current.addEventListener('mouseup', handleMouseUp);

    // Рендерим сцену
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      // Очищаем ресурсы при удалении компонента
      scene.remove(sphere);
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      // Удаляем обработчики событий мыши
      mountRef.current.removeEventListener('mousedown', handleMouseDown);
      mountRef.current.removeEventListener('mousemove', handleMouseMove);
      mountRef.current.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return <div ref={mountRef} />;
};

export default ThreeDObject;
