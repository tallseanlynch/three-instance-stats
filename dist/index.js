var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as three from 'three';
import { InstanceStats } from './InstanceStats';
function isClass(func) {
    return typeof func === 'function' && /^class\s/.test(func.toString());
}
;
var threeKeys = Object.keys(three);
var threeClasses = threeKeys.filter(function (threeKey) {
    var classToTest = three[threeKey];
    return isClass(classToTest);
});
function withInstanceCount(BaseClass) {
    var handler = {
        construct: function (target, args, newTarget) {
            target['instanceCount'] = (target['instanceCount'] || 0) + 1;
            target['instanceLineCount'] = target['instanceLineCount'] || {};
            var stack = new Error().stack;
            var stackLine = 'line unknown';
            if (stack) {
                var stackFirstPositionStart = stack.indexOf('at ');
                var stackSecondPositionStart = stack.indexOf('at ', stackFirstPositionStart + 1);
                var stackSecondPositionFinal = stack.indexOf(')', stackSecondPositionStart + 1);
                stackLine = stack.slice(stackSecondPositionStart + 3, stackSecondPositionFinal).replace('(', '');
                if (target['instanceLineCount'][stackLine]) {
                    target['instanceLineCount'][stackLine] += 1;
                }
                else {
                    target['instanceLineCount'][stackLine] = 1;
                }
            }
            return Reflect.construct(target, args, newTarget);
        }
    };
    return new Proxy(BaseClass, handler);
}
;
var extendedThree = __assign({}, three);
threeClasses.forEach(function (threeClass) {
    extendedThree[threeClass] = withInstanceCount(three[threeClass]);
});
var instances = function (allStats) {
    if (allStats === void 0) { allStats = false; }
    var instanceStats = {};
    threeClasses.forEach(function (instanceStat) {
        var potentialValue = extendedThree[instanceStat].instanceCount;
        if (potentialValue !== undefined || allStats === true) {
            instanceStats[instanceStat] = extendedThree[instanceStat].instanceCount || 0;
        }
    });
    return instanceStats;
};
var instanceLines = function (allStats) {
    if (allStats === void 0) { allStats = false; }
    var instanceLineStats = {};
    threeClasses.forEach(function (instanceStat) {
        var potentialValue = extendedThree[instanceStat].instanceLineCount;
        if (potentialValue !== undefined || allStats === true) {
            instanceLineStats[instanceStat] = extendedThree[instanceStat].instanceLineCount || {};
        }
    });
    return instanceLineStats;
};
export { instances, instanceLines, InstanceStats };
export var AmbientLight = extendedThree.AmbientLight, AnimationAction = extendedThree.AnimationAction, AnimationClip = extendedThree.AnimationClip, AnimationLoader = extendedThree.AnimationLoader, AnimationMixer = extendedThree.AnimationMixer, AnimationObjectGroup = extendedThree.AnimationObjectGroup, ArcCurve = extendedThree.ArcCurve, ArrayCamera = extendedThree.ArrayCamera, ArrowHelper = extendedThree.ArrowHelper, Audio = extendedThree.Audio, AudioAnalyser = extendedThree.AudioAnalyser, AudioContext = extendedThree.AudioContext, AudioListener = extendedThree.AudioListener, AudioLoader = extendedThree.AudioLoader, AxesHelper = extendedThree.AxesHelper, BatchedMesh = extendedThree.BatchedMesh, Bone = extendedThree.Bone, BooleanKeyframeTrack = extendedThree.BooleanKeyframeTrack, Box2 = extendedThree.Box2, Box3 = extendedThree.Box3, Box3Helper = extendedThree.Box3Helper, BoxGeometry = extendedThree.BoxGeometry, BoxHelper = extendedThree.BoxHelper, BufferAttribute = extendedThree.BufferAttribute, BufferGeometry = extendedThree.BufferGeometry, BufferGeometryLoader = extendedThree.BufferGeometryLoader, Camera = extendedThree.Camera, CameraHelper = extendedThree.CameraHelper, CanvasTexture = extendedThree.CanvasTexture, CapsuleGeometry = extendedThree.CapsuleGeometry, CatmullRomCurve3 = extendedThree.CatmullRomCurve3, CircleGeometry = extendedThree.CircleGeometry, Clock = extendedThree.Clock, Color = extendedThree.Color, ColorKeyframeTrack = extendedThree.ColorKeyframeTrack, CompressedArrayTexture = extendedThree.CompressedArrayTexture, CompressedCubeTexture = extendedThree.CompressedCubeTexture, CompressedTexture = extendedThree.CompressedTexture, CompressedTextureLoader = extendedThree.CompressedTextureLoader, ConeGeometry = extendedThree.ConeGeometry, Controls = extendedThree.Controls, CubeCamera = extendedThree.CubeCamera, CubeTexture = extendedThree.CubeTexture, CubeTextureLoader = extendedThree.CubeTextureLoader, CubicBezierCurve = extendedThree.CubicBezierCurve, CubicBezierCurve3 = extendedThree.CubicBezierCurve3, CubicInterpolant = extendedThree.CubicInterpolant, Curve = extendedThree.Curve, CurvePath = extendedThree.CurvePath, CylinderGeometry = extendedThree.CylinderGeometry, Cylindrical = extendedThree.Cylindrical, Data3DTexture = extendedThree.Data3DTexture, DataArrayTexture = extendedThree.DataArrayTexture, DataTexture = extendedThree.DataTexture, DataTextureLoader = extendedThree.DataTextureLoader, DepthTexture = extendedThree.DepthTexture, DirectionalLight = extendedThree.DirectionalLight, DirectionalLightHelper = extendedThree.DirectionalLightHelper, DiscreteInterpolant = extendedThree.DiscreteInterpolant, DodecahedronGeometry = extendedThree.DodecahedronGeometry, EdgesGeometry = extendedThree.EdgesGeometry, EllipseCurve = extendedThree.EllipseCurve, Euler = extendedThree.Euler, EventDispatcher = extendedThree.EventDispatcher, ExtrudeGeometry = extendedThree.ExtrudeGeometry, FileLoader = extendedThree.FileLoader, Float16BufferAttribute = extendedThree.Float16BufferAttribute, Float32BufferAttribute = extendedThree.Float32BufferAttribute, Fog = extendedThree.Fog, FogExp2 = extendedThree.FogExp2, FramebufferTexture = extendedThree.FramebufferTexture, Frustum = extendedThree.Frustum, GLBufferAttribute = extendedThree.GLBufferAttribute, GridHelper = extendedThree.GridHelper, Group = extendedThree.Group, HemisphereLight = extendedThree.HemisphereLight, HemisphereLightHelper = extendedThree.HemisphereLightHelper, IcosahedronGeometry = extendedThree.IcosahedronGeometry, ImageBitmapLoader = extendedThree.ImageBitmapLoader, ImageLoader = extendedThree.ImageLoader, ImageUtils = extendedThree.ImageUtils, InstancedBufferAttribute = extendedThree.InstancedBufferAttribute, InstancedBufferGeometry = extendedThree.InstancedBufferGeometry, InstancedInterleavedBuffer = extendedThree.InstancedInterleavedBuffer, InstancedMesh = extendedThree.InstancedMesh, Int16BufferAttribute = extendedThree.Int16BufferAttribute, Int32BufferAttribute = extendedThree.Int32BufferAttribute, Int8BufferAttribute = extendedThree.Int8BufferAttribute, InterleavedBuffer = extendedThree.InterleavedBuffer, InterleavedBufferAttribute = extendedThree.InterleavedBufferAttribute, Interpolant = extendedThree.Interpolant, KeyframeTrack = extendedThree.KeyframeTrack, LOD = extendedThree.LOD, LatheGeometry = extendedThree.LatheGeometry, Layers = extendedThree.Layers, Light = extendedThree.Light, LightProbe = extendedThree.LightProbe, Line = extendedThree.Line, Line3 = extendedThree.Line3, LineBasicMaterial = extendedThree.LineBasicMaterial, LineCurve = extendedThree.LineCurve, LineCurve3 = extendedThree.LineCurve3, LineDashedMaterial = extendedThree.LineDashedMaterial, LineLoop = extendedThree.LineLoop, LineSegments = extendedThree.LineSegments, LinearInterpolant = extendedThree.LinearInterpolant, Loader = extendedThree.Loader, LoaderUtils = extendedThree.LoaderUtils, LoadingManager = extendedThree.LoadingManager, Material = extendedThree.Material, MaterialLoader = extendedThree.MaterialLoader, Matrix2 = extendedThree.Matrix2, Matrix3 = extendedThree.Matrix3, Matrix4 = extendedThree.Matrix4, Mesh = extendedThree.Mesh, MeshBasicMaterial = extendedThree.MeshBasicMaterial, MeshDepthMaterial = extendedThree.MeshDepthMaterial, MeshDistanceMaterial = extendedThree.MeshDistanceMaterial, MeshLambertMaterial = extendedThree.MeshLambertMaterial, MeshMatcapMaterial = extendedThree.MeshMatcapMaterial, MeshNormalMaterial = extendedThree.MeshNormalMaterial, MeshPhongMaterial = extendedThree.MeshPhongMaterial, MeshPhysicalMaterial = extendedThree.MeshPhysicalMaterial, MeshStandardMaterial = extendedThree.MeshStandardMaterial, MeshToonMaterial = extendedThree.MeshToonMaterial, NumberKeyframeTrack = extendedThree.NumberKeyframeTrack, Object3D = extendedThree.Object3D, ObjectLoader = extendedThree.ObjectLoader, OctahedronGeometry = extendedThree.OctahedronGeometry, OrthographicCamera = extendedThree.OrthographicCamera, PMREMGenerator = extendedThree.PMREMGenerator, Path = extendedThree.Path, PerspectiveCamera = extendedThree.PerspectiveCamera, Plane = extendedThree.Plane, PlaneGeometry = extendedThree.PlaneGeometry, PlaneHelper = extendedThree.PlaneHelper, PointLight = extendedThree.PointLight, PointLightHelper = extendedThree.PointLightHelper, Points = extendedThree.Points, PointsMaterial = extendedThree.PointsMaterial, PolarGridHelper = extendedThree.PolarGridHelper, PolyhedronGeometry = extendedThree.PolyhedronGeometry, PositionalAudio = extendedThree.PositionalAudio, PropertyBinding = extendedThree.PropertyBinding, PropertyMixer = extendedThree.PropertyMixer, QuadraticBezierCurve = extendedThree.QuadraticBezierCurve, QuadraticBezierCurve3 = extendedThree.QuadraticBezierCurve3, Quaternion = extendedThree.Quaternion, QuaternionKeyframeTrack = extendedThree.QuaternionKeyframeTrack, QuaternionLinearInterpolant = extendedThree.QuaternionLinearInterpolant, RawShaderMaterial = extendedThree.RawShaderMaterial, Ray = extendedThree.Ray, Raycaster = extendedThree.Raycaster, RectAreaLight = extendedThree.RectAreaLight, RenderTarget = extendedThree.RenderTarget, RenderTarget3D = extendedThree.RenderTarget3D, RenderTargetArray = extendedThree.RenderTargetArray, RingGeometry = extendedThree.RingGeometry, Scene = extendedThree.Scene, ShaderMaterial = extendedThree.ShaderMaterial, ShadowMaterial = extendedThree.ShadowMaterial, Shape = extendedThree.Shape, ShapeGeometry = extendedThree.ShapeGeometry, ShapePath = extendedThree.ShapePath, ShapeUtils = extendedThree.ShapeUtils, Skeleton = extendedThree.Skeleton, SkeletonHelper = extendedThree.SkeletonHelper, SkinnedMesh = extendedThree.SkinnedMesh, Source = extendedThree.Source, Sphere = extendedThree.Sphere, SphereGeometry = extendedThree.SphereGeometry, Spherical = extendedThree.Spherical, SphericalHarmonics3 = extendedThree.SphericalHarmonics3, SplineCurve = extendedThree.SplineCurve, SpotLight = extendedThree.SpotLight, SpotLightHelper = extendedThree.SpotLightHelper, Sprite = extendedThree.Sprite, SpriteMaterial = extendedThree.SpriteMaterial, StereoCamera = extendedThree.StereoCamera, StringKeyframeTrack = extendedThree.StringKeyframeTrack, TetrahedronGeometry = extendedThree.TetrahedronGeometry, Texture = extendedThree.Texture, TextureLoader = extendedThree.TextureLoader, TorusGeometry = extendedThree.TorusGeometry, TorusKnotGeometry = extendedThree.TorusKnotGeometry, Triangle = extendedThree.Triangle, TubeGeometry = extendedThree.TubeGeometry, Uint16BufferAttribute = extendedThree.Uint16BufferAttribute, Uint32BufferAttribute = extendedThree.Uint32BufferAttribute, Uint8BufferAttribute = extendedThree.Uint8BufferAttribute, Uint8ClampedBufferAttribute = extendedThree.Uint8ClampedBufferAttribute, Uniform = extendedThree.Uniform, UniformsGroup = extendedThree.UniformsGroup, Vector2 = extendedThree.Vector2, Vector3 = extendedThree.Vector3, Vector4 = extendedThree.Vector4, VectorKeyframeTrack = extendedThree.VectorKeyframeTrack, VideoFrameTexture = extendedThree.VideoFrameTexture, VideoTexture = extendedThree.VideoTexture, WebGL3DRenderTarget = extendedThree.WebGL3DRenderTarget, WebGLArrayRenderTarget = extendedThree.WebGLArrayRenderTarget, WebGLCubeRenderTarget = extendedThree.WebGLCubeRenderTarget, WebGLRenderTarget = extendedThree.WebGLRenderTarget, WebGLRenderer = extendedThree.WebGLRenderer, WebXRController = extendedThree.WebXRController, WireframeGeometry = extendedThree.WireframeGeometry;
