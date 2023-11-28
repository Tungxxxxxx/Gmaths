package com.gmaths;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;
import com.facebook.FacebookSdk;
//Thêm InAppBrowser
import com.proyecto26.inappbrowser.RNInAppBrowserPackage;
//End Thêm InAppBrowser
// Thêm custom tabs
// import com.github.droibit.android.reactnative.customtabs.CustomTabsPackage;
// End Thêm custom tabs

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new DefaultReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for
      // example:
      // packages.add(new MyReactNativePackage());
      // Thêm gói mới vào danh sách thủ công (InAppBrowser)
      // packages.add(inAppBrowserPackage);
      // End Thêm gói mới vào danh sách thủ công (InAppBrowser)
      // Thêm custom tabs
      // packages.add(new CustomTabsPackage());
      // End Thêm custom tabs
      return packages;

    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

    @Override
    protected boolean isNewArchEnabled() {
      return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    }

    @Override
    protected Boolean isHermesEnabled() {
      return BuildConfig.IS_HERMES_ENABLED;
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    // Thêm fblogin
    FacebookSdk.setClientToken(getString(R.string.facebook_client_token));
    FacebookSdk.sdkInitialize(this.getApplicationContext());
    // End Thêm fblogin
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for
      // this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
}
