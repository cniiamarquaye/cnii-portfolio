---
layout: project
title: Terzaghi Consolidation Modelling for Aquifer Compaction and Subsidence Analysis
summary: Finite element implementation of Terzaghi consolidation theory in COMSOL to simulate pore pressure dissipation and vertical compaction in layered aquifer systems under groundwater withdrawal.
hero: /assets/images/comsol/comsol002_002.png
thumbnail: /assets/images/comsol/comsol002_002.png
tech:
  - COMSOL Multiphysics
  - Hydrogeological Modelling
  - Poroelasticity
  - Finite Element Analysis
  - Ground Subsidence Simulation
---

<section class="space-y-12">

<p class="text-lg text-slate-600 dark:text-slate-400">
Hydrogeological Modelling • Groundwater Mechanics • Aquifer Subsidence
</p>

<!-- ====================================================== -->
<!-- Project Context -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-3 gap-10 items-start">

<div class="md:col-span-2 space-y-6">

<h2 class="text-xl font-semibold">Project Context</h2>

<p>
Groundwater extraction alters pressure conditions within aquifers,
causing the sediment skeleton to bear additional stress and compact
over time. This deformation process is a primary driver of
<strong>land subsidence in groundwater-dependent regions</strong>.
</p>

<p>
This project implemented the classical <strong>Terzaghi one-dimensional
consolidation theory</strong> within a finite element framework using
COMSOL Multiphysics to simulate pore pressure dissipation and
vertical compaction in layered sedimentary aquifers.
</p>

<p>
The objective was to visualise the interaction between
<strong>groundwater flow, pressure decline, and aquifer deformation</strong>
under sustained hydraulic stress.
</p>

</div>

<div class="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">

<h3 class="font-semibold text-lg">Project Quick Facts</h3>

<ul class="mt-4 space-y-3 text-sm">

<li><strong>Model Type</strong><br>1D Terzaghi Consolidation</li>

<li><strong>Simulation Platform</strong><br>COMSOL Multiphysics</li>

<li><strong>System</strong><br>Layered Sedimentary Aquifer</li>

<li><strong>Primary Process</strong><br>Pore Pressure Dissipation</li>

<li><strong>Outputs</strong><br>Hydraulic Head, Velocity Field, Vertical Compaction</li>

<li><strong>Application</strong><br>Ground Subsidence Assessment</li>

</ul>

</div>

</div>

<!-- ====================================================== -->
<!-- Analytical Framework -->
<!-- ====================================================== -->

<div class="space-y-6">

<h2 class="text-xl font-semibold">Analytical Framework</h2>

<p>
The modelling workflow simulated aquifer deformation caused by
groundwater withdrawal using classical consolidation theory.
</p>

<ul class="list-disc pl-6 space-y-2">

<li>Finite element simulation of groundwater flow</li>
<li>Transient pore pressure dissipation</li>
<li>Application of Terzaghi consolidation equations</li>
<li>Post-processing calculation of vertical compaction</li>
<li>Spatial interpretation of aquifer deformation patterns</li>

</ul>

<p>
The analysis combined <strong>hydrogeological theory</strong> with
<strong>numerical modelling</strong> to visualise subsurface processes
that are otherwise difficult to observe directly.
</p>

</div>

<!-- ====================================================== -->
<!-- Model Physics -->
<!-- ====================================================== -->

<hr class="border-slate-200 dark:border-slate-700">

<div class="space-y-6">

<h2 class="text-xl font-semibold">Model Physics</h2>

<p>
Aquifer compaction was evaluated using the classical Terzaghi consolidation
framework, which links groundwater pressure decline to deformation of the
sediment skeleton. The model couples groundwater flow with effective stress
changes within compressible aquifer materials.
</p>

<h3 class="font-semibold text-lg mb-4">
Hydrogeologic Processes Driving Land Subsidence
</h3>

<!-- Layout Grid -->

<div class="grid md:grid-cols-5 gap-10 items-start">

<!-- ====================================================== -->
<!-- Equation Table -->
<!-- ====================================================== -->

<div class="md:col-span-3">

<!-- Mobile swipe hint -->

<p class="text-xs text-slate-500 mb-2 sm:hidden">
Swipe → to view full table
</p>

<div class="overflow-x-auto">

<table class="w-full min-w-[520px] md:min-w-0 text-sm border-y border-slate-200 dark:border-slate-700">

<thead class="bg-slate-100 dark:bg-slate-800">

<tr>
<th class="px-4 py-3 text-left">Process</th>
<th class="px-4 py-3 text-left">Governing Equation</th>
<th class="px-4 py-3 text-left">Interpretation</th>
</tr>

</thead>

<tbody class="divide-y divide-slate-200 dark:divide-slate-700">

<tr>

<td class="px-4 py-4 font-semibold">
Groundwater Flow
</td>

<td class="px-4 py-4 whitespace-nowrap">

<div class="bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 
font-mono text-lg tracking-wide font-semibold text-emerald-400 inline-block">

q = −K ∇h

</div>

</td>

<td class="px-4 py-4 text-slate-300">

Darcy’s Law governs groundwater movement within the aquifer system.
Groundwater pumping creates hydraulic gradients that drive pore
pressure decline in surrounding sediments.

</td>

</tr>

<tr>

<td class="px-4 py-4 font-semibold">
Pressure Dissipation
</td>

<td class="px-4 py-4 whitespace-nowrap">

<div class="bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 
font-mono text-lg tracking-wide font-semibold text-emerald-400 inline-block">

∂h / ∂t = c<sub>v</sub> ∇²h

</div>

</td>

<td class="px-4 py-4 text-slate-300">

The consolidation equation describes transient dissipation of pore
pressure through compressible sediments. The rate of pressure
propagation depends on hydraulic diffusivity and permeability of
the stratigraphic layers.

</td>

</tr>

<tr>

<td class="px-4 py-4 font-semibold">
Sediment Compaction
</td>

<td class="px-4 py-4 whitespace-nowrap">

<div class="bg-slate-50 dark:bg-slate-800 rounded-lg px-3 py-2 
font-mono text-lg tracking-wide font-semibold text-emerald-400 inline-block">

Δb = S<sub>sk</sub> Δh

</div>

</td>

<td class="px-4 py-4 text-slate-300">

Vertical compaction occurs as pore pressure declines and effective
stress increases. Settlement magnitude is proportional to skeletal
specific storage and the magnitude of hydraulic head decline.

</td>

</tr>

</tbody>

</table>

</div>

<!-- Footnote style variable definitions -->

<p class="text-xs text-slate-500 mt-4 leading-relaxed">

<strong>Where:</strong>
Δb = aquifer compaction; 
S<sub>sk</sub> = skeletal specific storage; 
Δh = hydraulic head decline; 
q = Darcy flux; 
K = hydraulic conductivity; 
h = hydraulic head; 
c<sub>v</sub> = coefficient of consolidation.

</p>

</div>

<!-- ====================================================== -->
<!-- Conceptual Diagram -->
<!-- ====================================================== -->

<div class="md:col-span-2 space-y-3">

<img src="{{ '/assets/images/comsol/terzaghiworkflow.jpg' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">

Conceptual representation of the Terzaghi consolidation process illustrating
how groundwater extraction increases effective stress within aquifer sediments.
As pore pressure dissipates through drainage, the sediment skeleton progressively
compacts, leading to measurable ground surface settlement.

</p>

</div>

</div>

</div>

<!-- ====================================================== -->
<!-- Analytical Pipeline -->
<!-- ====================================================== -->

<div class="space-y-6">

<h2 class="text-xl font-semibold">Analytical Pipeline</h2>

<div class="grid md:grid-cols-4 gap-6 text-sm text-center">

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Geometry Setup</p>
<p class="text-slate-500 mt-2">
Layered sedimentary system defined above impermeable bedrock
</p>
</div>

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Hydraulic Simulation</p>
<p class="text-slate-500 mt-2">
Transient groundwater flow solved using Darcy’s Law
</p>
</div>

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Pressure Evolution</p>
<p class="text-slate-500 mt-2">
Pore pressure decline driven by pumping boundary conditions
</p>
</div>

<div class="p-4 border rounded-lg border-slate-200 dark:border-slate-700">
<p class="font-semibold">Compaction Analysis</p>
<p class="text-slate-500 mt-2">
Vertical deformation derived from skeletal specific storage
</p>
</div>

</div>

</div>

<!-- ====================================================== -->
<!-- Model Geometry -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Model Geometry and Boundary Conditions</h2>

<p>
The simulation domain represents three sedimentary layers
overlying an impermeable bedrock surface with a structural step.
</p>

<p>
Groundwater pumping from the lower aquifer generates
hydraulic gradients that propagate through the sediment layers.
These pressure changes drive the consolidation process.
</p>

<ul class="list-disc pl-6 space-y-2">

<li>Layered sedimentary aquifer system</li>
<li>Impermeable bedrock boundary</li>
<li>Hydraulic head decline imposed at pumping location</li>
<li>Transient groundwater flow simulation</li>

</ul>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/comsol/comsol002_001.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
Finite element model geometry representing a layered sedimentary aquifer overlying an impermeable bedrock surface. Hydraulic head decline is imposed within the lower aquifer to simulate groundwater extraction, allowing analysis of pressure propagation and consolidation response within overlying sediments.
</p>

</div>

</div>

<!-- ====================================================== -->
<!-- Hydraulic Response -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Hydraulic Head and Velocity Field</h2>

<p>
Groundwater flow converges toward the pumping boundary,
creating spatial gradients in hydraulic head across the
sedimentary layers.
</p>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/comsol/comsol002_002.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
Simulated hydraulic head distribution and groundwater velocity field generated by pumping from the lower aquifer. The resulting gradients drive pore pressure dissipation through overlying sediments, initiating the consolidation process that ultimately produces aquifer compaction.
</p>

</div>

</div>

<!-- ====================================================== -->
<!-- Compaction Response -->
<!-- ====================================================== -->

<div class="grid md:grid-cols-2 gap-10 items-start">

<div class="space-y-4">

<h2 class="text-xl font-semibold">Vertical Compaction Response</h2>

<p>
As pore pressure declines, the effective stress within the
sediment skeleton increases, causing vertical compression of
the aquifer layers.
</p>

<p>
The magnitude of compaction depends primarily on the
<strong>skeletal specific storage</strong> and the magnitude of
hydraulic head decline.
</p>

<p>
The simulation visualises the spatial distribution of vertical
settlement within the aquifer system after a ten-year pumping period.
</p>

</div>

<div class="space-y-2">

<img src="{{ '/assets/images/comsol/comsol002_003.png' | relative_url }}"
class="rounded-xl w-full max-w-md mx-auto">

<p class="text-sm text-slate-500 text-center">
Simulated vertical compaction distribution after ten years of sustained groundwater extraction. Settlement magnitude varies across sediment layers according to hydraulic diffusivity and skeletal specific storage, illustrating how low-permeability strata delay pressure dissipation and concentrate deformation within compressible units.
</p>

</div>

</div>


<div class="grid md:grid-cols-3 gap-8">
<!-- ====================================================== -->
<!-- Key Insights -->
<!-- ====================================================== -->

<div class="space-y-4">

<h2 class="text-xl font-semibold">Key Insights</h2>

<ul class="list-disc pl-6 space-y-2">

<li>Pore pressure dissipation controls consolidation rate.</li>

<li>Low-permeability layers delay settlement.</li>

<li>Hydraulic stress redistributes load to the sediment skeleton.</li>

<li>Subsidence processes evolve over long time scales.</li>

</ul>

</div>

<!-- ====================================================== -->
<!-- Environmental Significance -->
<!-- ====================================================== -->

<!-- <div class="grid md:grid-cols-3 gap-8"> -->

<div class="space-y-4">

<h2 class="text-xl font-semibold">Environmental and Infrastructure Relevance</h2>

<ul class="list-disc pl-6 space-y-2">

<li>Ground subsidence risk assessment</li>
<li>Groundwater extraction impact analysis</li>
<li>Aquifer storage planning</li>
<li>Infrastructure stability evaluation</li>

</ul>

</div>

<div class="space-y-4">

<h2 class="text-xl font-semibold">Professional Relevance</h2>

<p>This project demonstrates capability in:</p>

<ul class="list-disc pl-6 space-y-2">

<li>Hydrogeological numerical modelling</li>
<li>Poroelastic process simulation</li>
<li>Interpretation of aquifer deformation dynamics</li>
<li>Integration with subsidence monitoring techniques (e.g. InSAR)</li>

</ul>

</div>

</div>

<!-- Footnote spanning both columns -->
  <p class="col-span-1 md:col-span-3 text-xs text-gray-400 dark:text-gray-500 italic pt-4 border-t border-gray-200 dark:border-slate-700">
    <span class="font-medium">Note:</span>
    This model builds on structured COMSOL training workflows and extends them to explore environmental transport behaviour and interpretation.
  </p>

</section>
