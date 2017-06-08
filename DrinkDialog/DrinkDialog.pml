<?xml version="1.0" encoding="UTF-8" ?>
<Package name="DrinkDialog" format_version="4">
    <Manifest src="manifest.xml" />
    <BehaviorDescriptions>
        <BehaviorDescription name="behavior" src="behavior_1" xar="behavior.xar" />
    </BehaviorDescriptions>
    <Dialogs>
        <Dialog name="PepperDialoig" src="PepperDialoig/PepperDialoig.dlg" />
        <Dialog name="ExampleDialog" src="behavior_1/ExampleDialog/ExampleDialog.dlg" />
    </Dialogs>
    <Resources>
        <File name="epicsax" src="behavior_1/epicsax.ogg" />
    </Resources>
    <Topics>
        <Topic name="PepperDialoig_enu" src="PepperDialoig/PepperDialoig_enu.top" topicName="PepperDialoig" language="en_US" />
        <Topic name="ExampleDialog_enu" src="behavior_1/ExampleDialog/ExampleDialog_enu.top" topicName="ExampleDialog" language="en_US" />
    </Topics>
    <IgnoredPaths />
    <Translations auto-fill="en_US">
        <Translation name="translation_en_US" src="translations/translation_en_US.ts" language="en_US" />
    </Translations>
</Package>
