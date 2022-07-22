var allowedLogoSizes;
(function (allowedLogoSizes) {
    allowedLogoSizes[allowedLogoSizes["px32"] = 32] = "px32";
    allowedLogoSizes[allowedLogoSizes["px64"] = 64] = "px64";
    allowedLogoSizes[allowedLogoSizes["px128"] = 128] = "px128";
    allowedLogoSizes[allowedLogoSizes["px256"] = 256] = "px256";
    allowedLogoSizes[allowedLogoSizes["px512"] = 512] = "px512";
})(allowedLogoSizes || (allowedLogoSizes = {}));
export default allowedLogoSizes;
