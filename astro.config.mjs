// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "yexca'Docs for VRChat",
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/yexca-VRChat/vrchat-docs-source' }],
			favicon: '/favicon.png',
			sidebar: [
				{
					label: '板块',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '目录', slug: 'home' },
						{ label: 'VRC Avatar Descriptor', slug: 'div/vrc_avatar_descriptor' },
						{ label: 'PhysBones', slug: 'dynamics/physbones' },
						{ label: 'Contacts', slug: 'dynamics/contacts' },
						{ label: 'State Behaviors', slug: 'div/state_behaviors' },
						{ label: 'Cloth', slug: 'div/cloth' },
						{ label: 'Particle System', slug: 'div/particle_system' },
						{ label: 'Trail Renderer', slug: 'div/trail_renderer' },
						{ label: 'Animation', slug: 'summary/anime' },
						{ label: 'Parameters', slug: 'summary/parameters' },
						{ label: 'Animator Layers', slug: 'summary/layers' },
						{ label: 'VRChat Menu', slug: 'summary/menu' },
					],
				},
				{
					label: '上传',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '上传前准备', slug: 'upload/prepare' },
						{ label: '成品模型上传', slug: 'upload/upload' },
						{ label: 'MMD 模型转为 FBX', slug: 'upload/mmd_to_fbx' },
						{ label: 'MMD 模型上传', slug: 'upload/mmd_upload' },
						{ label: 'SDK2 转为 SDK3', slug: 'upload/sdk2_to_sdk3' },
					],
				},
				{
					label: '修改',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '添加默认图层与菜单', slug: 'editing/playable_layers' },
						{ label: 'Base 层-蹲姿，趴姿', slug: 'editing/base' },
						{ label: 'Action 层-AFK', slug: 'editing/afk' },
						{ label: 'FX 层-物品开关', slug: 'editing/switch' },
					],
				},
				{
					label: '附加',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '物体绑骨', slug: 'additional/tied_bones' },
						{ label: '换衣服', slug: 'additional/change_clothes' },
						{ label: '固定世界物品', slug: 'additional/set_object' },
						{ label: '固定世界 MMD', slug: 'additional/set_mmd' },
						{ label: '手势开关', slug: 'additional/gesture' },
					],
				},
				{
					label: '表情',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '添加手势表情', slug: 'emote/emote_anim' },
						{ label: 'Blender 添加形态键', slug: 'emote/add_blendershapes' },
						{ label: '一键复制', slug: 'emote/pumkin_tools' },
					],
				},
				{
					label: '脚本',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '自身跳 MMD 舞蹈', slug: 'script/self_mmd' },
						{ label: '随机播放音乐', slug: 'script/shuffle_playback' },
						{ label: '顺序播放音乐', slug: 'script/play_in_order' },
						{ label: '出场动画', slug: 'script/start' },
					],
				},
				{
					label: '其他',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '添加一个可以写字的笔', slug: 'other/vrlabs_marker' },
						{ label: 'Blender 换头', slug: 'other/blender_change_head' },
						{ label: 'PC 下移动手', slug: 'other/pc_arm_moving' },
					],
				},
				{
					label: '关于',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '关于', slug: 'about' },
						{ label: '参考资料', slug: 'references' },
					],
				},
			],
		}),
	],
});
