var actComp = app.project.activeItem;
var actLy = actComp.selectedLayers;
var FX = app.project.activeItem.selectedLayers[0]("Effects").addProperty("ADBE Shift Channels");
FX.property(1).setValue(2);
