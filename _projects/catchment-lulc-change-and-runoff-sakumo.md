---
layout: project
title: Multi-Temporal Land Use Change and Runoff Modelling in the Sakumo Catchment
summary: Integrated geospatial analysis of 30 years of satellite data to assess land-use change, runoff dynamics, and non-point source pollution hotspots within a Ramsar-designated wetland catchment.
hero: /assets/images/qnspect/SKbackground.jpg
thumbnail: /assets/images/qnspect/SKRunoffTrend.png
tech:
  - Google Earth Engine
  - QGIS
  - ArcGIS Pro
  - QNSPECT
  - Landsat
---

<section class="space-y-12">

<p class="text-lg text-slate-600 dark:text-slate-400">
Hydrological Modelling • Remote Sensing • Watershed Pollution Assessment
</p>

<!-- ====================================================== -->
<!-- Project Context -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-3 gap-10 items-start">

<div class="md:col-span-2 space-y-6">

<h2 class="text-xl font-semibold">Project Context</h2>

<p>
Rapid urbanisation within coastal wetland catchments increases runoff,
nutrient loading, and ecological stress.
</p>

<p>
This project analysed <strong>30 years of satellite imagery</strong> to
quantify land-use and land-cover (LULC) change in the
<strong>Sakumo Ramsar catchment in Ghana</strong> and evaluate its
implications for runoff generation and non-point source pollution.
</p>

<p>
The goal was to link <strong>spatial land transformation</strong> with
hydrological response and pollution hotspot formation.
</p>

<img src="{{ '/assets/images/qnspect/SKStudyAreaMap001.png' | relative_url }}"
class="rounded-xl w-full">

<p class="text-sm text-slate-500 text-center">
<strong> Geographic extent and drainage structure of the Sakumo Ramsar catchment.<br></strong>
<i> The catchment boundary defines the hydrological domain used for runoff modelling and pollutant transport analysis. All land-use and environmental drivers influencing lagoon water quality are evaluated within this spatial unit.
</i>
</p>

</div>

<div class="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">

<h3 class="font-semibold text-lg">Project Quick Facts</h3>

<ul class="mt-4 space-y-3 text-sm">

<li><strong>Study Area</strong><br>Sakumo Ramsar Catchment</li>

<li><strong>Study Period</strong><br>~30 years</li>

<li><strong>Primary Data</strong><br>Landsat Satellite Series</li>

<li><strong>Tools</strong><br>Google Earth Engine, QGIS, ArcGIS Pro</li>

<li><strong>Hydrological Model</strong><br>QNSPECT Watershed Model</li>

<li><strong>Outputs</strong><br>LULC Maps, Runoff Surfaces, Nutrient Load Maps</li>

</ul>

</div>

</div>

<!-- ====================================================== -->
<!-- Analytical Framework -->
<!-- ====================================================== -->

<div class="space-y-6">

<h2 class="text-xl font-semibold">Analytical Framework</h2>

<p>
The workflow integrated remote sensing, GIS-based hydrological modelling,
and watershed pollution assessment.
</p>

<ul class="list-disc pl-6 space-y-2">

<li>Multi-temporal Landsat image classification</li>
<li>Supervised LULC mapping across three decades</li>
<li>Change detection analysis</li>
<li>Runoff and flow accumulation modelling</li>
<li>QNSPECT modelling of nitrogen (TN) and phosphorus (TP) loads</li>
<li>Spatial hotspot analysis</li>

</ul>

<p>
Processing combined <strong>cloud-based workflows in Google Earth Engine</strong>
with desktop geospatial analysis using <strong>QGIS and ArcGIS Pro</strong>.
</p>

</div>

<!-- ====================================================== -->
<!-- Conceptual Workflow -->
<!-- ====================================================== -->

<div class="space-y-4">

<h2 class="text-xl font-semibold">Conceptual Workflow</h2>

<img src="{{ '/assets/images/qnspect/pollutionLoadModellingWorkflow.png' | relative_url }}"
class="rounded-xl w-full">

<p class="text-sm text-slate-500 text-center">
Integrated remote sensing and watershed modelling workflow.
</p>

</div>

<!-- ====================================================== -->
<!-- Analytical Pipeline -->
<!-- ====================================================== -->

<div class="space-y-6">

<h2 class="text-xl font-semibold">Analytical Pipeline</h2>

<div class="grid md:grid-cols-5 gap-6 text-sm text-center">

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Satellite Data</p>
<p class="text-slate-500 mt-2">
Landsat imagery used for multi-temporal land cover mapping
</p>
</div>

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Terrain Analysis</p>
<p class="text-slate-500 mt-2">
SRTM DEM used for watershed and sub-catchment delineation
</p>
</div>

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Land Use Change</p>
<p class="text-slate-500 mt-2">
Supervised classification and change detection
</p>
</div>

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Hydrological Modelling</p>
<p class="text-slate-500 mt-2">
Runoff modelling incorporating precipitation and soil hydrological properties
</p>
</div>

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Pollution Modelling</p>
<p class="text-slate-500 mt-2">
QNSPECT estimation of TN and TP loads and hotspot zones
</p>
</div>

</div>

</div>

<div class="space-y-6">

<h2 class="text-xl font-semibold">Supporting Environmental Drivers</h2>

<p>
Additional datasets were analysed to understand environmental
factors influencing hydrological behaviour and pollutant transport
within the Sakumo catchment. These datasets provide contextual
evidence supporting the observed increases in runoff and nutrient
loads identified through the modelling workflow.
</p>

<p>
Population growth, terrain characteristics, soil hydrological
properties, and precipitation variability all influence surface
runoff generation, infiltration capacity, and the mobilisation
of pollutants across the watershed.
</p>

<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

<figure class="text-center">

<div class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center transition hover:shadow-lg">
<img src="{{ '/assets/images/qnspect/skglobpop19902020.gif' | relative_url }}"
class="object-contain w-full h-full p-2">
</div>

<figcaption class="text-sm text-slate-500 mt-2">
<strong> Spatial evolution of population density across the Sakumo watershed between 1990 and 2020.<br></strong>
<i>Population expansion reflects rapid urbanisation surrounding the wetland system and represents a key driver of land transformation and increasing watershed pressure.
</i>
</figcaption>

</figure>


<figure class="text-center">

<div class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center transition hover:shadow-lg">
<img src="{{ '/assets/images/qnspect/skdem.png' | relative_url }}"
class="object-contain w-full h-full p-2">
</div>

<figcaption class="text-sm text-slate-500 mt-2">
<strong> Digital Elevation Model (SRTM) used to derive terrain structure and hydrological flow pathways within the catchment.<br></strong>
<i>Elevation gradients control surface runoff routing, watershed boundaries, and sub-catchment structure used in the hydrological modelling workflow.
</i>
</figcaption>

</figure>


<figure class="text-center">

<div class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center transition hover:shadow-lg">
<img src="{{ '/assets/images/qnspect/sksoilhysog.png' | relative_url }}"
class="object-contain w-full h-full p-2">
</div>

<figcaption class="text-sm text-slate-500 mt-2">
<strong> Hydrological soil groups across the Sakumo watershed representing soil infiltration potential.<br></strong>
<i> These classifications determine runoff generation rates within the QNSPECT model, with low-permeability soils contributing to higher surface runoff and pollutant transport.
</i>
</figcaption>

</figure>


<figure class="text-center">

<div class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center transition hover:shadow-lg">
<img src="{{ '/assets/images/qnspect/skchirps19902020.gif' | relative_url }}"
class="object-contain w-full h-full p-2">
</div>

<figcaption class="text-sm text-slate-500 mt-2">
<strong> Spatial distribution of precipitation across the Sakumo catchment derived from CHIRPS climate data.<br></strong>
<i> Rainfall intensity and variability influence runoff production and nutrient mobilisation across the watershed.
</i>
</figcaption>

</figure>

</div>

</div>

<!-- ====================================================== -->
<!-- Land Use Change -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Land Use and Land Cover Change</h2>

<p>
Urban expansion progressively reduced natural land cover,
increasing impervious surfaces within the catchment.
</p>

<p>
Multi-temporal satellite imagery was classified to map the
evolution of land use across the Sakumo watershed. The results
highlight rapid growth of built-up areas at the expense of
vegetated and open land surfaces.
</p>

<p>
These transformations influence hydrological behaviour by
reducing infiltration capacity and increasing surface runoff
generation within the catchment.
</p>

<p>
A detailed description of the satellite preprocessing,
classification workflow, and accuracy assessment used to
generate the LULC maps is provided in the earlier project
<a href="{{ '/projects/catchment-change-effects-on-ramsar-sites-sakumo/' | relative_url }}"
class="text-blue-600 dark:text-blue-400 underline">
Land Use Change Detection Analysis
</a>.
</p>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/qnspect/LULCSK19902020.gif' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
<strong> Multi-temporal land-use and land-cover evolution within the Sakumo watershed (1990–2020).<br></strong>
<i> Landsat classifications reveal progressive expansion of built-up areas and decline of vegetated surfaces. These transformations reduce infiltration capacity and increase runoff generation within the catchment.
</i>
</p>

</div>

</div>

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Watershed and Sub-Catchment Delineation</h2>

<p>
Hydrological analysis requires defining drainage boundaries and
flow pathways within the catchment. The Sakumo watershed was
delineated using elevation-derived terrain data to identify
natural drainage patterns and surface runoff pathways.
</p>

<p>
A <strong>Digital Elevation Model (SRTM)</strong> was used to
derive flow direction, flow accumulation, and stream networks.
These layers enabled the identification of drainage outlets and
the subdivision of the catchment into smaller
<strong>hydrologically connected sub-catchments</strong>.
</p>

<ul class="list-disc pl-6 space-y-2">

<li>Sink filling and DEM conditioning</li>
<li>Flow direction and flow accumulation modelling</li>
<li>Stream network extraction using accumulation thresholds</li>
<li>Watershed outlet identification</li>
<li>Subdivision into hydrologically consistent sub-catchments</li>

</ul>

<p>
These sub-catchments formed the spatial framework for runoff
modelling and estimation of non-point source pollution loads
within the QNSPECT watershed model.
</p>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/qnspect/sksubcatchment.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
<strong> Hydrologically derived sub-catchments used as modelling units in the QNSPECT watershed analysis.<br></strong>
<i> Sub-catchments were delineated from the DEM using flow direction and accumulation modelling to represent discrete drainage units contributing runoff and nutrient loads to the lagoon.
</i>
</p>

</div>

</div>

<!-- ====================================================== -->
<!-- Runoff Dynamics -->
<!-- ====================================================== -->

<div class="space-y-6">

<h2 class="text-xl font-semibold">Runoff and Hydrological Response</h2>

<p>
Urban expansion progressively reduced natural land cover and increased impervious surfaces within the catchment.
The land transformations altered hydrological response patterns,
increasing runoff generation and downstream flow accumulation.
</p>

<div class="grid md:grid-cols-2 gap-8">

<img src="{{ '/assets/images/qnspect/SKRunoffSpatialDistribution.jpg' | relative_url }}"
class="rounded-lg w-full">

<img src="{{ '/assets/images/qnspect/SKRunoffTrend.png' | relative_url }}"
class="rounded-lg max-w-sm h-auto mx-auto">

</div>

<p class="text-sm text-slate-500 text-center">
<strong> Spatial distribution (left) and temporal trends (right) of modelled surface runoff across the Sakumo watershed.<br></strong>
<i>Runoff intensity increases in urbanised portions of the catchment where impervious surfaces dominate, demonstrating the hydrological consequences of land-use transformation.
</i>
</p>

</div>

<!-- ====================================================== -->
<!-- Pollution Hotspots -->
<!-- ====================================================== -->

<div class="grid grid-cols-2 gap-10 items-start">

<div class="space-y-6">

<h2 class="text-xl font-semibold">Nutrient Loading Hotspots</h2>

<p>
Total nitrogen (TN) and total phosphorus (TP) concentrations
were spatially clustered in rapidly urbanising sub-catchments.
</p>

<p>
The spatial patterns highlight sub-catchments where land-use
transformation is directly influencing downstream water quality.
These zones represent priority areas for watershed management and
pollution mitigation strategies.
</p>

</div>

<div class="space-y-4">

<figure class="text-center">
<img src="{{ '/assets/images/qnspect/SKgraphTNTPTrend.png' | relative_url }}"
class="w-full max-w-xl rounded-xl mx-auto">

<figcaption class="text-sm text-slate-500 mt-2">
<strong> Modelled temporal trends of total nitrogen (TN) and total phosphorus (TP) export within the Sakumo watershed.<br></strong>
<i> The results indicate increasing nutrient delivery to downstream wetland systems, corresponding with intensified land development and increased runoff generation.
</i>
</figcaption>
</figure>

</div>

</div>


<div class="grid grid-cols-2 gap-10 items-start">

<div class="space-y-6">

<h2 class="text-xl font-semibold">Nutrient Loading Hotspots</h2>

<p>
Spatial modelling identified distinct hotspots of nutrient loading
within rapidly urbanising portions of the catchment. Areas with high impervious surface coverage exhibited elevated nitrogen and
phosphorus export due to increased surface runoff.
</p>

<p>
The spatial patterns highlight sub-catchments where land-use
transformation is directly influencing downstream water quality.
These zones represent priority areas for watershed management and
pollution mitigation strategies.
</p>

</div>

<div class="space-y-4">

<figure class="text-center">
<img src="{{ '/assets/images/qnspect/SKTNTrend.png' | relative_url }}"
class="w-full h-auto rounded-lg">

<figcaption class="text-sm text-slate-500 mt-2">
<strong> Spatial distribution of modelled total nitrogen (TN) export across Sakumo sub-catchments.<br></strong>
<i> Elevated nitrogen loads are concentrated in rapidly urbanising drainage areas where runoff mobilisation is highest.
</i>
</figcaption>
</figure>

<figure class="text-center">
<img src="{{ '/assets/images/qnspect/SKTPTrend.png' | relative_url }}"
class="w-full h-auto rounded-lg">

<figcaption class="text-sm text-slate-500 mt-2">
<strong> Spatial distribution of modelled total phosphorus (TP) export across Sakumo sub-catchments.<br></strong>
<i> High phosphorus export zones correspond with areas of dense urban development and agricultural activity.
</i>
</figcaption>
</figure>

</div>

</div>


<!-- ====================================================== -->
<!-- Literature-Based Water Quality Interpretation -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Literature-Based Water Quality Interpretation</h2>

<p>
Observed increases in simulated nitrogen and phosphorus loads are
consistent with historical water quality observations reported in
previous studies of the Sakumo Ramsar site. Monitoring records
indicate increasing nutrient concentrations and declining water
quality conditions within the wetland ecosystem.
</p>

<p>
The temporal distribution of accumulated runoff and total phosphorus
in sub-catchment 5 (S5) aligns with these reported trends,
suggesting that land-use transformation and urban expansion are
contributing to increased nutrient delivery to the wetland system
and potential eutrophication risks.
</p>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/qnspect/SKTrendPastCurrent.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
<strong> Historical and contemporary trends in water quality indicators within the Sakumo Ramsar wetland system.<br></strong>
<i> Observed increases in nutrient concentrations align with modelled runoff and nutrient export patterns, supporting the interpretation that watershed urbanisation is contributing to declining wetland water quality.
</i>
</p>

</div>

</div>

<!-- ====================================================== -->
<!-- Environmental Significance -->
<!-- ====================================================== -->
<div class="grid md:grid-cols-2 gap-8">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Environmental and Management Relevance</h2>

<p>
The results provide spatial evidence supporting improved
wetland catchment management and water quality protection.
</p>

<ul class="list-disc pl-6 space-y-2">

<li>Catchment-scale water quality management</li>
<li>Wetland conservation planning</li>
<li>Urban expansion monitoring</li>
<li>Nutrient load mitigation strategies</li>

</ul>

</div>

<!-- ====================================================== -->
<!-- Professional Relevance -->
<!-- ====================================================== -->

<div class="space-y-4">

<h2 class="text-xl font-semibold">Professional Relevance</h2>

<p>This project demonstrates capability in:</p>

<ul class="list-disc pl-6 space-y-2">

<li>Multi-temporal remote sensing analysis</li>
<li>Hydrological modelling linked to land transformation</li>
<li>Integration of cloud and desktop GIS workflows</li>
<li>Translating spatial analysis into environmental decision support</li>

</ul>

</div>

</div>

<!-- ====================================================== -->
<!-- Publication -->
<!-- ====================================================== -->

<div class="space-y-4">

<h2 class="text-xl font-semibold">Publication</h2>

<a href="https://doi.org/10.2208/journalofjsce.25-27025"
   target="_blank"
   rel="noopener noreferrer"
   class="text-blue-600 hover:underline font-medium">

   Assessment of Rainfall–Runoff and Non-Point Source Pollution Loads in the Sakumo Catchment using GIS and QNSPECT

</a>

</div>

</section>