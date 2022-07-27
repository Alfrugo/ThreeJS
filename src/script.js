import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'
import typefaceFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
// console.log(THREE)

console.log(OrbitControls)

// // Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// Object

const material = new THREE.MeshBasicMaterial()

const sphere = new THREE.Mesh(
    new THREE.BoxBufferGeometry(16, 16 , 16),
    material
)

// const plane = new THREE.Plane(
//     new THREE.PlaneBufferGeometry(1,1),
//     material
// )

scene.add(sphere)

// Sizes
 
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
    
}

//camera
const  camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100 )
camera.position.x = 1
camera.position.y = 1
camera.position.z = 20
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)


//render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2
    ))

renderer.render(scene, camera)

 
