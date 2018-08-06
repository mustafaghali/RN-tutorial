public class ImagePickerModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    public ImagePickerModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
    }  
    
    
    @Override
public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
    if (pickerSuccessCallback != null) {
        if (resultCode == Activity.RESULT_CANCELED) {
            pickerCancelCallback.invoke("ImagePicker was cancelled");
        } else if (resultCode == Activity.RESULT_OK) {
            Uri uri = intent.getData();

            if (uri == null) {
                pickerCancelCallback.invoke("No image data found");
            } else {
                try {
                    pickerSuccessCallback.invoke(uri);
                } catch (Exception e) {
                    pickerCancelCallback.invoke("No image data found");
                }
            }
        }
    }
}
    
    
    private static final int PICK_IMAGE = 1;

    private Callback pickerSuccessCallback;
    private Callback pickerCancelCallback;

    @ReactMethod
    public void openSelectDialog(ReadableMap config, Callback successCallback, Callback cancelCallback) {
        Activity currentActivity = getCurrentActivity();

        if (currentActivity == null) {
            cancelCallback.invoke("Activity doesn't exist");
            return;
        }

        pickerSuccessCallback = successCallback;
        pickerCancelCallback = cancelCallback;

        try {
            final Intent galleryIntent = new Intent();

            galleryIntent.setType("image/*");
            galleryIntent.setAction(Intent.ACTION_GET_CONTENT);

            final Intent chooserIntent = Intent.createChooser(galleryIntent, "Pick an image");

            currentActivity.startActivityForResult(chooserIntent, PICK_IMAGE);
        } catch (Exception e) {
            cancelCallback.invoke(e);
        }
    }
}
