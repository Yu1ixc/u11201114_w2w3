const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.StartAnim
	];
};
self.C3_JsPropNameTable = [
	{A: 0},
	{Gate2: 0},
	{Gate: 0},
	{Flame: 0}
];

self.InstanceType = {
	A: class extends self.ISpriteInstance {},
	Gate2: class extends self.ISpriteInstance {},
	Gate: class extends self.ISpriteInstance {},
	Flame: class extends self.ISpriteInstance {}
}