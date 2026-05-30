// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const translations = (zhTw, en, ja) => ({ 'zh-TW': zhTw, en, ja });

const link = (label, slug, zhTw, en, ja) => ({
	label,
	slug,
	translations: translations(zhTw, en, ja),
});

const group = (label, zhTw, en, ja, items) => ({
	label,
	translations: translations(zhTw, en, ja),
	items,
});

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "yexca'Docs for VRChat",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yexca-VRChat/vrchat-docs-source' }],
			favicon: '/favicon.png',
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/language-redirect.js',
						defer: true,
					},
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
				'zh-tw': {
					label: '正體中文',
					lang: 'zh-TW',
				},
				en: {
					label: 'English',
					lang: 'en',
				},
				ja: {
					label: '日本語',
					lang: 'ja',
				},
			},
			sidebar: [
				group('板块', '板塊', 'Sections', 'セクション', [
					link('目录', 'home', '目錄', 'Contents', '目次'),
					link('VRC Avatar Descriptor', 'div/vrc_avatar_descriptor', 'VRC Avatar Descriptor', 'VRC Avatar Descriptor', 'VRC Avatar Descriptor'),
					link('PhysBones', 'dynamics/physbones', 'PhysBones', 'PhysBones', 'PhysBones'),
					link('Contacts', 'dynamics/contacts', 'Contacts', 'Contacts', 'Contacts'),
					link('State Behaviors', 'div/state_behaviors', 'State Behaviors', 'State Behaviors', 'State Behaviors'),
					link('Cloth', 'div/cloth', 'Cloth', 'Cloth', 'Cloth'),
					link('Particle System', 'div/particle_system', 'Particle System', 'Particle System', 'Particle System'),
					link('Trail Renderer', 'div/trail_renderer', 'Trail Renderer', 'Trail Renderer', 'Trail Renderer'),
					link('Animation', 'summary/anime', 'Animation', 'Animation', 'Animation'),
					link('Parameters', 'summary/parameters', 'Parameters', 'Parameters', 'Parameters'),
					link('Animator Layers', 'summary/layers', 'Animator Layers', 'Animator Layers', 'Animator Layers'),
					link('VRChat Menu', 'summary/menu', 'VRChat Menu', 'VRChat Menu', 'VRChat Menu'),
				]),
				group('上传', '上傳', 'Upload', 'アップロード', [
					link('上传前准备', 'upload/prepare', '上傳前準備', 'Before Uploading', 'アップロード前の準備'),
					link('成品模型上传', 'upload/upload', '成品模型上傳', 'Uploading a Finished Avatar', '完成済みアバターのアップロード'),
					link('MMD 模型转为 FBX', 'upload/mmd_to_fbx', 'MMD 模型轉為 FBX', 'Convert MMD Models to FBX', 'MMDモデルをFBXに変換'),
					link('MMD 模型上传', 'upload/mmd_upload', 'MMD 模型上傳', 'Uploading MMD Models', 'MMDモデルのアップロード'),
					link('SDK2 转为 SDK3', 'upload/sdk2_to_sdk3', 'SDK2 轉為 SDK3', 'Convert SDK2 to SDK3', 'SDK2からSDK3へ変換'),
				]),
				group('修改', '修改', 'Editing', '編集', [
					link('添加默认图层与菜单', 'editing/playable_layers', '添加預設圖層與選單', 'Add Default Layers and Menus', 'デフォルトレイヤーとメニューを追加'),
					link('Base 层-蹲姿，趴姿', 'editing/base', 'Base 層-蹲姿，趴姿', 'Base Layer: Crouch and Prone', 'Baseレイヤー: しゃがみ・伏せ'),
					link('Action 层-AFK', 'editing/afk', 'Action 層-AFK', 'Action Layer: AFK', 'Actionレイヤー: AFK'),
					link('FX 层-物品开关', 'editing/switch', 'FX 層-物品開關', 'FX Layer: Item Toggles', 'FXレイヤー: アイテム切り替え'),
				]),
				group('附加', '附加', 'Additional', '追加', [
					link('物体绑骨', 'additional/tied_bones', '物體綁骨', 'Bind Objects to Bones', 'オブジェクトをボーンに固定'),
					link('换衣服', 'additional/change_clothes', '換衣服', 'Change Clothes', '衣装を変更'),
					link('固定世界物品', 'additional/set_object', '固定世界物品', 'World-Fixed Objects', 'ワールド固定オブジェクト'),
					link('固定世界 MMD', 'additional/set_mmd', '固定世界 MMD', 'World-Fixed MMD', 'ワールド固定MMD'),
					link('手势开关', 'additional/gesture', '手勢開關', 'Gesture Toggles', 'ジェスチャー切り替え'),
				]),
				group('表情', '表情', 'Expressions', '表情', [
					link('添加手势表情', 'emote/emote_anim', '添加手勢表情', 'Add Gesture Expressions', 'ジェスチャー表情を追加'),
					link('Blender 添加形态键', 'emote/add_blendershapes', 'Blender 添加形態鍵', 'Add Shape Keys in Blender', 'Blenderでシェイプキーを追加'),
					link('一键复制', 'emote/pumkin_tools', '一鍵複製', 'One-Click Copy', 'ワンクリックコピー'),
				]),
				group('脚本', '腳本', 'Scripts', 'スクリプト', [
					link('自身跳 MMD 舞蹈', 'script/self_mmd', '自身跳 MMD 舞蹈', 'Play MMD Dance on Yourself', '自分でMMDダンスを再生'),
					link('随机播放音乐', 'script/shuffle_playback', '隨機播放音樂', 'Shuffle Music Playback', '音楽をランダム再生'),
					link('顺序播放音乐', 'script/play_in_order', '順序播放音樂', 'Play Music in Order', '音楽を順番に再生'),
					link('出场动画', 'script/start', '出場動畫', 'Intro Animation', '登場アニメーション'),
				]),
				group('其他', '其他', 'Other', 'その他', [
					link('添加一个可以写字的笔', 'other/vrlabs_marker', '添加一支可以寫字的筆', 'Add a Writable Pen', '書けるペンを追加'),
					link('Blender 换头', 'other/blender_change_head', 'Blender 換頭', 'Head Swapping in Blender', 'Blenderで頭を交換'),
					link('PC 下移动手', 'other/pc_arm_moving', 'PC 下移動手', 'Move Hands on PC', 'PCで手を動かす'),
				]),
				group('关于', '關於', 'About', 'このサイトについて', [
					link('关于', 'about', '關於', 'About', 'このサイトについて'),
					link('参考资料', 'references', '參考資料', 'References', '参考資料'),
				]),
			],
		}),
	],
});
